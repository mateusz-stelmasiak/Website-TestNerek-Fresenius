import React, { Component } from 'react';

export default class ScrollProgressBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
        this.bannerHeight=0;
        this.navBarHeight=0;
    }
    //get banner hight from DOM
    getBannerHeight(){
        let bannerElement = document.querySelector('.BannerContainer');
        bannerElement ? this.bannerHeight = bannerElement.clientHeight
                        : this.bannerHeight = 0;

    }

    getNavBarHeight(){
        let navBarElement = document.querySelector('.NavBar');
        navBarElement ? this.navBarHeight = navBarElement.clientHeight
            : this.navBarHeight = 0;
    }

    //recalculate banner heigh on resize
    handleResize = () =>{
        this.getBannerHeight();
        this.getNavBarHeight();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }


    scrollProgress = () => {
        if (this.bannerHeight===0) this.getBannerHeight();

        let scrollPx = document.documentElement.scrollTop-this.bannerHeight;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight-this.bannerHeight;

        if (scrollPx<0){scrollPx=0;}
        const scrolled = `${scrollPx/ winHeightPx * 100}%`;

        this.setState({
            scrolled: scrolled
        });
    };

    render() {
        if (this.navBarHeight===0) this.getNavBarHeight();

        const progressContainerStyle = {
            background: "var(--secondary-color-lighter)",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            height: "5px",
            position: "sticky",
            top: this.navBarHeight,
            left: 0,
            width: "100%",
            zIndex: 99
        };

        const progressBarStyle = {
            height: "5px",
            background: "var(--secondary-color)",
            width: this.state.scrolled
        };

        return (
                <div className="progress-container" style={progressContainerStyle}>
                    <div className="progress-bar" style={progressBarStyle} />
                </div>
        );
    }
}
