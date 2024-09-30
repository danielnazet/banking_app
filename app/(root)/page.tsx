import HeaderBox from '@/components/HeaderBox';

const Home = () => {
  const loggedIn ={firstName: 'Daniel'};
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and manage Your account and transactions efficiently'/>
        </header>
      </div>
    </section>
  )
}

export default Home;