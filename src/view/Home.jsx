import LoginForm from './common/LoginForm'
function Home() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Home"
            />
          </div> 
          <LoginForm/>         
        </div>
      </div>
    </section>
  );
}

export default Home;
