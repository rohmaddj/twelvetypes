import React from 'react';
import ArchetypeList from '../child/ArchetypeList';
import ArchetypeDetail from '../child/ArchetypeDetail';

class ArchetypePage extends React.Component {
  state = { detail: false }

  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

  onImageClick = () => {
    this.setState({
      detail: true
    })
  }

  onButtonBackClick = () => {
    this.setState({
      detail: false
    })
  }
  render() {
    return (
      <div className="ui vertical stripe quote segment">
        { this.state.detail ?
          <ArchetypeDetail
            onButtonBackClick={ () => this.onButtonBackClick() }
          />
          :
          <ArchetypeList
            onImageClick={ () => this.onImageClick() }
          />
        }
      </div>
    )
  }
}

export default ArchetypePage