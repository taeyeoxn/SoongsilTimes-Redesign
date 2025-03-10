import './HomeContent.css';

const HomeContent = () => {
  return (
    <div>
      <section className='cover'>
        <div className='cover-title'></div>
        <div className='cover-image'></div>
      </section>

      <section className='section'>
        <div className='section-header'>
          <p>Editor's Picks</p>
          <div className='section-divider'></div>
        </div>
        <div className='pick-list'>
          <div className='pick-card'></div>
          <div className='pick-card'></div>
          <div className='pick-card'></div>
        </div>
      </section>

      <section className='section'>
        <div className='section-header'>
          <p>Columns</p>
          <div className='section-divider'></div>
        </div>
        <div className='column-list'>
          <div className='column-card'>
          <h2>Why the Humanities Still <br />Matter in Tech-Driven World</h2>
            <div className='reporter'>
              <div className='reporter-avatar'></div>
              <h4>By Yoo Tae-yeon</h4>
            </div>
          </div>
          <div className='column-separator'></div>
          <div className='column-card'>
          <h2>Why the Humanities Still <br />Matter in Tech-Driven World</h2>
            <div className='reporter'>
              <div className='reporter-avatar'></div>
              <h4>By Yoo Tae-yeon</h4>
            </div>
          </div>
          <div className='column-separator'></div>
          <div className='column-card'>
            <h2>Why the Humanities Still <br />Matter in Tech-Driven World</h2>
            <div className='reporter'>
              <div className='reporter-avatar'></div>
              <h4>By Yoo Tae-yeon</h4>
            </div>
          </div>
        </div>
      </section>

    <section className='section'>
    <div className='section-header'>
        <p>Photo</p>
        <div className='section-divider'></div>
    </div>
    <div className='photo-list'>
        <div className='photo-column1'>
            <div className='photo-item-large'></div>
            <div className='photo-item-medium'></div>
        </div>
        <div className='photo-column2'>
            <div className='photo-item-main'></div>
            <div className='photo-row'>
                <div className='photo-item-small'></div>
                <div className='photo-item-small'></div>
            </div>
        </div>
    </div>
    </section>

    </div>
  );
};

export default HomeContent;