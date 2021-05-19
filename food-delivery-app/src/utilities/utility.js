const logout = () => {
  // setEmaillog();
  localStorage.clear('Email');
  localStorage.clear('Password');
  localStorage.clear('cart');
  // setHome(true);
  // setFlag(true);
  
};

export default logout;
