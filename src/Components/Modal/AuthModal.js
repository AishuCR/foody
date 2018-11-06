import React, {Component} from "react";
  import { Button, Modal } from "react-bootstrap";
  import facebook from "../images/fblogin.png";
  import google from '../images/google-login.png';
  import '../../SCSS/input.css';
//   import './authmodal.css';
  
  class AuthModal extends Component {
      constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
                email: "",
                password: "",
                show : false
              };
      }
    
      handleHide() {
        this.setState({ show: false });
      }
      handleShow(){
          console.log("YOU CLICKED ON THE MODAL BUTTON");
          console.log('State : ', this.state);
          this.setState({show:true});
      }
      validateForm() {
              return this.state.email.length > 0 && this.state.password.length > 0;
      }
          
      handleChange = event => {
              this.setState({
                [event.target.id]: event.target.value
              });
      }
          
            handleSubmit = event => {
              event.preventDefault();
            }
      render() {
          console.log("Current State : ", this.state);
        return (
          <div className="modal-container" >
             <Button
             className="navlogin"
              bsStyle="primary"
              bsSize="large"
              onClick={() =>{
                  this.handleShow()
              }}
            >
              Login
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              animation={false}
              aria-labelledby="contained-modal-title"
              className='Modal-body'>
            <Modal.Body>
             <img className="googleicon" src = { google } width='50' height='50'  />
              <button className="goolge-login">Log In using Google</button>
              <br/>
              <br/>
              <img className="facebookicon" src = { facebook } width='50' height='50'></img>
              <button className="facebooklogin">Log In using Facebook </button>
            </Modal.Body>
            <br/>
            <Modal.Footer>
              <Button className="closebutton" onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
        );
      }
    }
    
  export default AuthModal;