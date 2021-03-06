import React from 'react';

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        this.props.onChange({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      };
      render() {
        return (
            <div className="contact-container">
                <h1 className="contact-heading">Contact</h1>
                <form className="contact-form" action="#" method="GET" name="Contact">
                    <label for="name">Name</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={e => this.change(e)}
                    /> 
                     <label for="email">Email</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    />
                    <div>
                        <label for="subject">Subject</label>
                        <input
                        id="subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={e => this.change(e)}
                        />    
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        onChange={e => this.change(e)}
                        />
                    </div>
                    <div>
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                    </div>
                </form>
                <div className="contact-info">
                    <p className="contact-info-content">Phone: 704-433-2312</p>
                    <p className="contact-info-content">E-mail: fullstock@gmail.com</p>   
                </div>
                
            </div>
            
        );
      }    
}

export default Contact;