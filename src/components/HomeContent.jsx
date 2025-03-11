import './HomeContent.css';
import CoverImg from '../assets/coverstory.svg';
import Picks1 from '../assets/picks1.svg';
import Picks2 from '../assets/picks2.svg';
import Picks3 from '../assets/picks3.svg';
import Reporter1 from '../assets/reporter1.svg';
import Reporter2 from '../assets/reporter2.svg';
import Reporter3 from '../assets/reporter3.svg';
import Photo1 from '../assets/photo1.svg';
import Photo2 from '../assets/photo2.svg';
import Photo3 from '../assets/photo3.svg';
import Photo4 from '../assets/photo4.svg';
import Photo5 from '../assets/photo5.svg';

const HomeContent = () => {
  return (
    <div>
      <section className='cover'>
        <div className='cover-title'>
          <p>Anemonia, <br />Why We Miss the Unexperienced Times</p>
          <h4>No.199 Cover Story</h4>
        </div>
        <div className='cover-image'><img src={CoverImg}/></div>
      </section>

      <section className='section'>
        <div className='section-header'>
          <p>Editor's Picks</p>
          <div className='section-divider'></div>
        </div>
        <div className='pick-number'>
            <h2>1</h2>
            <h2>2</h2>
            <h2>3</h2>
        </div>
        <div className='pick-list'>
          <div className='pick-card'>
            <img src={Picks1}/>
            <p>ReTro Trend, Y2K: <br />The Past and Present of Y2K</p>
          </div>
          <div className='pick-card'>
            <img src={Picks2}/>
            <p>North Korea's Unauthorized <br />Spraying of Filth Ballons</p>
          </div>
          <div className='pick-card'>
            <img src={Picks3}/>
            <p>DDoS Attack: <br />The Cyber War</p>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='section-header'>
          <p>Columns</p>
          <div className='section-divider'></div>
        </div>
        <div className='column-list'>
          <div className='column-card'>
          <h2>The Significance of Design, <br />Production and Capital</h2>
            <div className='reporter'>
              <div className='reporter-avatar'><img src={Reporter1}/></div>
              <h4>By Lee Ha-sun</h4>
            </div>
          </div>
          <div className='column-separator'></div>
          <div className='column-card'>
          <h2>Bringing a Wide Range of Communication <br />with Simle Looking Music </h2>
            <div className='reporter'>
              <div className='reporter-avatar'><img src={Reporter2}/></div>
              <h4>By Cheong Sung-hui</h4>
            </div>
          </div>
          <div className='column-separator'></div>
          <div className='column-card'>
            <h2>Son of the Nation When Called, <br />Your Son When Injured</h2>
            <div className='reporter'>
              <div className='reporter-avatar'><img src={Reporter3}/></div>
              <h4>By Lee Hyun-jun</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='section-header'>
          <p>Photo</p>
          <div className='section-divider'></div>
        </div>
        <div className='photo-grid'>
          <div className='photo-item large'><img src={Photo3}/></div>
          <div className='photo-item small'><img src={Photo1}/></div>
          <div className='photo-item small'><img src={Photo2}/></div>
          <div className='photo-item small'><img src={Photo4}/></div>
          <div className='photo-item small'><img src={Photo5}/></div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;