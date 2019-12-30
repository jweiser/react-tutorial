import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            image: 'http://i.imgflip.com/ibij.jpg',
            allMemeImages: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    allMemeImages: response.data.memes
                });
            });
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.allMemeImages.length === 0) {
            return;
        }

        const memeImageIndex = Math.floor(Math.random() * this.state.allMemeImages.length);
        const memeImage = this.state.allMemeImages[memeImageIndex];
        this.setState({
            image: memeImage.url
        });
    }

    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='topText'
                        value={this.state.topText}
                        placeholder='Top Text'
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='bottomText'
                        value={this.state.bottomText}
                        placeholder='Bottom Text'
                        onChange={this.handleChange}
                    />
                    <button>Generate!</button>
                </form>
                <div className="meme">
                    <img src={this.state.image} alt='' />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;