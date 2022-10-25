function randomValues() {
    var timeline = anime.timeline({
      duration: function() {
          return anime.random(0, 270);
        },
      delay: [45, 250],
      direction: 'alternate',
      easing: 'easeInOutQuint',
      autoplay: true,
      loop:true,
    });
    timeline.add({
      targets: ['feDisplacementMap'],
      scale:[5 , 30]
      });
    timeline.add({
      targets: ['#svg_8'],
      fill: ['#150485', '#590995', '#c62a88', '#03c4a1'],
      scale: [.5, 1.05],
      complete: randomValues
      });
  };
  
  randomValues();
  
  var stroke_anim1 = anime({
    targets: ['#svg_12'],
    strokeDashoffset: [anime.setDashoffset, 0],
    points: [
      { value: [
        '88.5,80.45313l272.5,79.54688l-231,189l-41.5,-268.54688z',
        '207.5,185.45313l156.5,-26.45313l,190l-44.5,-268.54687z']
      },
    ],
    fill: ['#150485', '#590995', '#c62a88', '#03c4a1'],
    stroke: ['#f1e7b6', '#fe346e', '#400082', '#00bdaa'],
    easing: 'easeOutQuad',
    duration: 2000,
    autoplay:true,
    loop: true,
  });
  
  var stroke_anim2 = anime({
    targets: ['.p_0'],
    strokeDashoffset: [anime.setDashoffset, 0],
    points: [
      { value: [
        '88.5,80.45313l272.5,79.54688l-231,189l-41.5,-268.54688z',
        '207.5,185.45313l156.5,-26.45313l,190l-44.5,-268.54687z']
      },
    ],
    stroke: ['#f1e7b6', '#fe346e', '#400082', '#00bdaa'],
    easing: 'easeOutQuad',
    delay:1000,
    duration: 2000,
    autoplay:true,
    loop: true,
  });
  
  
  var rotate_stroke_anime = anime({
    targets: ['#svg_13 path' ],
    easing: ['easeOutInCirc'],
    strokeDashoffset:  [10, 0],
    duration: 1000,
    opacity:.5,
    skewY:100,
    skewX:100,
    autoplay:true,
    direction:'normal',
    loop: true,
    stroke:[.3, 1],
  });