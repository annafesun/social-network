import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState(
        { editMode: true }
    )
  }

  deactivateEditMode = () => {
    this.setState(
        { editMode: false }
    )
    this.props.updateStatus(this.state.status)
  }

  onStatusChanged = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
        <div>
          {!this.state.editMode &&
          <div>
            <b>Status:</b> <span onClick={this.activateEditMode}>{this.props.status || 'Write your status'}</span>
          </div>
          }
          {this.state.editMode &&
          <div>
            <input
                onChange={this.onStatusChanged} autoFocus={true} onBlur={this.deactivateEditMode}
                value={this.state.status}
            />
          </div>
          }
        </div>
    )
  }

}

export default ProfileStatus