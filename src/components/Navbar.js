const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="/">
          Locker
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/ForumPage">
                Forum
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/SignUpPage">
                Sign Up
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/SignInPage">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
