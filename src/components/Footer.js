import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
    return (
    <footer>
        <ul>
            <li>
                <a href="https://github.com/marikokaku" target="_blank" rel="noopener noreferrer">
                    <button>
                        <AiFillGithub />
                    </button>
                </a>
            </li>

            <li>
            <a href="www.linkedin.com/in/marikokaku" target="_blank" rel="noopener noreferrer">
                    <button>
                        <AiFillLinkedin />
                    </button>
                </a>
            </li>

        </ul>
    </footer>
    );
}

export default Footer;