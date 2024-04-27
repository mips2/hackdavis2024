import React from 'react'

const Login = () => {
  return (
    <div class="container">
    <form class="login-form" action="#" method="post">
        <h2>Login</h2>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
    </form>
</div>
  )
}

export default Login