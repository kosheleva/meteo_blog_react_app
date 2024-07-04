import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container">
        <div className="panel panel_home_blog_info text_shadow">
          <p>
            Welcome to meteo blog!
          </p>
          <br />
          <p>
            Have you encountered any unusual meteorological or cosmic phenomena? 
          </p>
          <p>
            For example, a lunar rainbow or tubular clouds? 
          </p>  
          <p>
            If yes, then you have come to the right place! Share your extraordinary observations with people, 
            create and publish an article in <Link to="/blog">blog</Link>.
          </p>
        </div> 

        <div className="panel panel_home_contacts_info text_shadow">
          <p>
            Do you want an unusual phenomenon to be shown on the news? 
            Go to the <Link to="/contacts">contacts</Link> page, choose a method convenient for you and send your news, 
            we will definitely make it popular!
          </p>
          
        </div> 
      </div>
    </>
  )
}

export default Home;
