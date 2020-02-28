import React from "react"
import { Link } from "react-router-dom"

const HeadLine = () => {
  return (
    <div className="ui vertical stripe segment">
      <div className="ui center aligned stackable grid container headline">
        <div className="row">
          <div className="ten wide column">
            <h3 className="text-white ui header">What's your personality type?</h3>
            <p className="text-white block-center">
              Find out your personality archetype and discover more surprising
              things that you never knew about yourself. Take our free
              archetype personality test!
            </p>
          </div>
         </div>
          <div className="row">
              <div className="ten wide column">
                <Link className="mb-1 ui huge white button" to="/quiz">
                  TAKE THE QUIZ <i className="caret square right icon"></i>
                </Link>
              </div>
          </div>
        </div>
      </div>
  )
}

export default HeadLine
