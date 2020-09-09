console.log("**Begin**");
if ('serviceWorker' in navigator) {
  console.log("**Service worker found**");
  navigator.serviceWorker.register('./hide_user_post_script.js', {scope: './'})
  .then((reg) => {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
console.log("**End**");