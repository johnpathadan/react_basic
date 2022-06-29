function Header(){
    return (
        <header className="header">
                <nav className= "navs">
                <img src="./react.png" alt="react logo" className = 'react-logo' />
                <ul className = "nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            </header>
    );
}

function MainContent(){
    return (
        <div className='main-content'>
            <h1>Reasons why I am excited to learn react</h1>
            <ol>
                <li>Mst promising component of javascript</li>
                <li>Has custom components</li>
                <li>Job opportunities</li>
            </ol>
        </div>
    );
}

function Footer(){
    return (
        
            <footer className="footer">
                &amp; John Doe developement. All rights reserved
            </footer>
        
    );
}

function LearnReact(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<LearnReact />, document.getElementById('root')); 