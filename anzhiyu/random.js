var posts=["2025/10/07/hello-world/","2025/10/07/javase/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };