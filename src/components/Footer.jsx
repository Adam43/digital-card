import React from "react";
import instagramLogo from "../images/insta.png";
import facebookLogo from "../images/facebook.png";
import discordLogo from "../images/discord.png";
import twitterLogo from "../images/twitter.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <h1>Footer</h1>
            <div className="images">
                <img src={instagramLogo} className="img-one"/>
                <img src={facebookLogo} className="img-two"/>
                <img src={discordLogo} className="img-three"/>
                <img src={twitterLogo} className="img-four"/>
            </div>
        </footer>
    )
}