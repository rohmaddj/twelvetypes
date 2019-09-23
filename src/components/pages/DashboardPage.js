import React from 'react';
import { connect } from 'react-redux';
import twelveType from '../../api/twelveType';
import Divider from '../child/Divider';
import { updateUser, storeResult, signOut, signIn, resetAnswers } from '../../actions/index';
import { Grid, Container, Image, Header, Button } from 'semantic-ui-react';
import Chart from 'react-apexcharts'

class DashboardPage extends React.Component {
  constructor() {
    super()
    this.state = {
      // optionsBar: {
      //   chart: {
      //     stacked: true,
      //     stackType: '100%',
      //     toolbar: {
      //       show: false
      //     }
      //   },
      //   plotOptions: {
      //     bar: {
      //       horizontal: true,
      //     },
      //   },
      //   dataLabels: {
      //     dropShadow: {
      //       enabled: true
      //     }
      //   },
      //   stroke: {
      //     width: 0,
      //   },
      //   xaxis: {
      //     categories: [''],
      //     type: 'Top Archetype',
      //     labels: {
      //       show: false
      //     },
      //     axisBorder: {
      //       show: false
      //     },
      //     axisTicks: {
      //       show: false
      //     }
      //   },
      //   fill: {
      //     opacity: 1,
      //     type: 'gradient',
      //     gradient: {
      //       shade: 'dark',
      //       type: "vertical",
      //       shadeIntensity: 0.35,
      //       gradientToColors: undefined,
      //       inverseColors: false,
      //       opacityFrom: 0.85,
      //       opacityTo: 0.85,
      //       stops: [90, 0, 100]
      //     },
      //   },

      //   legend: {
      //     position: 'bottom',
      //     horizontalAlign: 'right',
      //   }
      // },
      // seriesBar: [{
      //   name: 'blue',
      //   data: [100]
      // }, {
      //   name: 'green',
      //   data: [0]
      // }, {
      //   name: 'yellow',
      //   data: [0]
      // }],
      optionsPie: {
        labels: ['A']
      },
      seriesPie: [100],
      chart: false
    }
  }

  componentDidUpdate = async (prevProps) => {
    if(this.props.archetype !== prevProps.archetype) {
      if (this.props.archetype.length > 0 && this.props.answers.length === 0) {
        try {
          const response = await twelveType.get('/user/quizResult', {
            headers: {
              Authorization: 'Bearer ' + this.props.token
            },
            params:  {
              answers: this.props.archetype }
          })
          // this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
          this.props.storeResult(response.data.percentage)

          // pie update data
          const newPieLabels = Object.keys(response.data.top_answers)
          const newPieSeries = []
          newPieLabels.map((data) => {
            newPieSeries.push(response.data.top_answers[data])
            return true
          })

          this.setState({
            seriesPie: newPieSeries,
            optionsPie: {
              labels: newPieLabels,
              legend: { show:false}
            },
            chart: true
          })

        } catch {
          console.log('error bro');
        }
      }
    }
  }

  componentDidMount = async () => {
    console.log(this.props.archetype.length , this.props.answers.length === 0)
    window.scrollTo(0, 0)

    if(localStorage.getItem('authToken') === null) {
      this.props.history.push('/login')
    }
    if (this.props.answers.length > 0) {
      try {
        const response = await twelveType.get('/user/quizResult', {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          },
          params:  {
            answers: this.props.answers }
        })
        this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
        this.props.storeResult(response.data.percentage)

        // pie update data
        const newPieLabels = Object.keys(response.data.top_answers)
        const newPieSeries = []
        newPieLabels.map((data) => {
          newPieSeries.push(response.data.top_answers[data])
          return true
        })

        const newBarSeries = Object.keys(response.data.top_answers).reduce((carry, key) => {
          return [
            ...carry,
            {
              name: key,
              data: [response.data.top_answers[key]]
            }
          ]
        }, []);

        this.setState({
          seriesBar: newBarSeries, //update chart
          seriesPie: newPieSeries,
          optionsPie: {
            labels: newPieLabels,
            legend: { show:false}
          },
          chart: true
        })

      } catch {
        console.log('error bro');
      }
    } else if (this.props.archetype.length > 0 && this.props.answers.length === 0) {
      try {
        const response = await twelveType.get('/user/quizResult', {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          },
          params:  {
            answers: this.props.archetype }
        })
        this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
        this.props.storeResult(response.data.percentage)

        // pie update data
        const newPieLabels = Object.keys(response.data.top_answers)
        const newPieSeries = []
        newPieLabels.map((data) => {
          newPieSeries.push(response.data.top_answers[data])
          return true
        })

        this.setState({
          seriesPie: newPieSeries,
          optionsPie: {
            labels: newPieLabels,
            legend: { show:false}
          },
          chart: true
        })

      } catch {
        console.log('error bro');
      }
    }
  }

  // onRetakeQuiz = () => {
  //   this.props.updateUser(this.props.username, "", this.props.token)
  //   this.props.history.push('/quiz')
  // }
  onSignOut = () => {
    localStorage.removeItem('authToken')
    this.props.updateUser('','','','')
    this.props.resetAnswers()
    this.props.signOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title={'Here Are Your Results, '+ this.props.username} />
        <div className="ui container">
        <Grid>
          <Grid.Column width={7}>
            {/* <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.username}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in { this.props.register.substr(0,4)}</span>
              </Card.Meta>
              <Card.Description>
                {this.props.username} is a {this.props.result.length > 0 ? Object.keys(this.props.result[0]) : 'You should take quiz first to describe your archetype'}.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span>
                <Icon name='circle' className="green-icon" />
                Online
              </span>
              <span onClick={() => this.onSignOut()} className="logout-text">
                <Icon name='sign in alternate' className="red-icon" />
                Logout
              </span>
            </Card.Content>
          </Card> */}
              <Chart
                options={this.state.optionsPie}
                series={this.state.seriesPie}
                type="donut"
                width="450"
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <Header as='h2'>Archetype Personality Summary</Header>
              { this.props.result.map((data) => {
                var archetype = Object.keys(data)[0]
                return <Container key={archetype}>
                <Header as='h2' className={archetype}>
                  <Image src={`https://individualogist.com/wp-content/themes/indivi-wp/img/icons/${Object.keys(data)[0]}.webp`} />
                  <Header.Content>{data[archetype] + " " + archetype}</Header.Content>
                </Header>
                <p>{data.interpretation.content}</p>
                <br/>
              </Container>
              }) }
            </Grid.Column>
          </Grid>
          <Button onClick={this.onSignOut}>Sign Out</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    archetype: state.auth.archetype,
    username: state.auth.username,
    register: state.auth.register,
    token: state.auth.token,
    answers: state.quiz.answers,
    result: state.quiz.result
  }
}

export default connect(
  mapStateToProps, {
    updateUser, storeResult, signOut, resetAnswers, signIn
  }
)(DashboardPage);