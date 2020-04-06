// Scroll Header
  // function scrollBanner() {
  //   let scrollPos;
  //   let head = document.querySelector('#home');
  //   let butt = document.querySelector('#home > p');
    
  //   scrollPos = window.scrollY;

  //   if (scrollPos <= 600) {
  //     head.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
  //     head.style.opacity = 1 - (scrollPos / 600);
  //     butt.style.transform = "translateY(" + (-scrollPos / 2) + "px" + ")";
  //     butt.style.opacity = 1 - (scrollPos / 600);
  //   }
  // }
  // window.addEventListener('scroll', scrollBanner);

  // // or this
  // setTimeout(function(){var rellax = new Rellax('.rellax')},50);

  // window.addEventListener('scroll', function(){
  //   document.querySelector('.img').style.opacity = (1 - window.scrollY / (window.innerHeight * 0.75)) * 0.5;
  //   document.querySelector('.img img').style.filter = `blur(${(window.scrollY / (window.innerHeight * 0.75)) * 5}px)`;
  // });


// About actions
  // let panela = document.querySelector('#pnl1');
  // let panelb = document.querySelector('#pnl2');

  // function tgl1() {
  //   this.classList.toggle('o-act');
  // }
  // panela.addEventListener('click', tgl1);

  // function tgl2() {
  //   this.classList.toggle('o-act');
  // }
  // panelb.addEventListener('click', tgl2);

// About actions v4 
  // let sales = document.querySelector('#sale');

  // function tSa() {
  // 	this.firstElementChild.classList.remove('mv0');
  // 	this.firstElementChild.nextElementSibling.classList.toggle('mv1');
  //   this.lastElementChild.classList.toggle('mv2');
  //   this.nextElementSibling.classList.toggle('mv2');

  // }
  // sales.addEventListener('click', tSa);

// Nav actions
  let nav = document.querySelector('#na');
  function tNa() {
      this.parentElement.classList.toggle('oct');
  }
  nav.addEventListener('click', tNa);

  let cls = document.querySelector('.clse');
  function tNb() {
    this.parentElement.parentElement.classList.remove('oct');
  }
  cls.addEventListener('click', tNb);

  let rN0 = document.querySelector('#n0');
  function cN0() {
    this.parentElement.parentElement.parentElement.classList.remove('oct');
    window.location = "#home";
  }
  rN0.addEventListener('click', cN0);

  let rN1 = document.querySelector('#n1');
  function cN1() {
      this.parentElement.parentElement.parentElement.classList.remove('oct');
      window.location = "#about";
  }
  rN1.addEventListener('click', cN1);

  let rN2 = document.querySelector('#n2');
  function cN2() {
      this.parentElement.parentElement.parentElement.classList.remove('oct');
      window.location = "#projects";
  }
  rN2.addEventListener('click', cN2);

  let rN3 = document.querySelector('#n3');
  function cN3() {
      this.parentElement.parentElement.parentElement.classList.remove('oct');
      window.location = "#pricing";
  }
  rN3.addEventListener('click', cN3);

  // let rN4 = document.querySelector('#n4');
  // function cN4() {
  //     this.parentElement.parentElement.parentElement.classList.remove('o-act');
  //     window.location = "#blog";
  // }

  let rN5 = document.querySelector('#n5');
  function cN5() {
      this.parentElement.parentElement.parentElement.classList.remove('oct');
      window.location = "#contact";
  }
  rN5.addEventListener('click', cN5);


  // function kNa() {
  //     this.classList.remove('oct');
  //   }
  // document.querySelector('!nav').addEventListener('click', kNa);

// Project actions
  let bxa = document.querySelector('#bx0');
  function asa() {
    this.children[0].classList.add('emg');
    this.children[1].children[0].classList.add('elb');
    this.children[1].children[1].classList.add('ein');
    this.children[1].children[2].classList.add('etp');
  }
  function rsa() {
    this.children[0].classList.remove('emg');
    this.children[1].children[0].classList.remove('elb');
    this.children[1].children[1].classList.remove('ein');
    this.children[1].children[2].classList.remove('etp');
  }
  bxa.addEventListener('mouseleave', rsa);    
  bxa.addEventListener('mouseenter', asa);

  let bxb = document.querySelector('#bx1');
  function asb() {
    this.children[0].classList.add('emg');
    this.children[1].children[0].classList.add('elb');
    this.children[1].children[1].classList.add('ein');
    this.children[1].children[2].classList.add('etp');
  }
  function rsb() {
    this.children[0].classList.remove('emg');
    this.children[1].children[0].classList.remove('elb');
    this.children[1].children[1].classList.remove('ein');
    this.children[1].children[2].classList.remove('etp');
  }
  bxb.addEventListener('mouseleave', rsb);
  bxb.addEventListener('mouseenter', asb);

  // let bxc = document.querySelector('#bx2');
  // function asc() {
  //   this.children[0].classList.add('emg');
  //   this.children[1].children[0].classList.add('elb');
  //   this.children[1].children[1].classList.add('ein');
  //   this.children[1].children[2].classList.add('etp');
  // }
  // function rsc() {
  //   this.children[0].classList.remove('emg');
  //   this.children[1].children[0].classList.remove('elb');
  //   this.children[1].children[1].classList.remove('ein');
  //   this.children[1].children[2].classList.remove('etp');
  // }
  // bxc.addEventListener('mouseleave', rsc);
  // bxc.addEventListener('mouseenter', asc);

  // let bxe = document.querySelector('#bx4');
  // function ase() {
  //   this.children[0].classList.add('emg');
  //   this.children[1].children[0].classList.add('elb');
  //   this.children[1].children[1].classList.add('ein');
  //   this.children[1].children[2].classList.add('etp');
  // }
  // function rse() {
  //   this.children[0].classList.remove('emg');
  //   this.children[1].children[0].classList.remove('elb');
  //   this.children[1].children[1].classList.remove('ein');
  //   this.children[1].children[2].classList.remove('etp');
  // }
  // bxe.addEventListener('mouseleave', rse);
  // bxe.addEventListener('mouseenter', ase);

  // let bxd = document.querySelector('#bx3');
  // function asd() {
  //   this.children[0].classList.add('emg');
  //   this.children[1].children[0].classList.add('elb');
  //   this.children[1].children[1].classList.add('ein');
  //   this.children[1].children[2].classList.add('etp');
  // }
  // function rsd() {
  //   this.children[0].classList.remove('emg');
  //   this.children[1].children[0].classList.remove('elb');
  //   this.children[1].children[1].classList.remove('ein');
  //   this.children[1].children[2].classList.remove('etp');
  // }
  // bxd.addEventListener('mouseleave', rsd);
  // bxd.addEventListener('mouseenter', asd);

  let bxf = document.querySelector('#bx5');
  function asf() {
    this.children[0].classList.add('emg');
    this.children[1].children[0].classList.add('elb');
    this.children[1].children[1].classList.add('ein');
    this.children[1].children[2].classList.add('etp');
  }
  function rsf() {
    this.children[0].classList.remove('emg');
    this.children[1].children[0].classList.remove('elb');
    this.children[1].children[1].classList.remove('ein');
    this.children[1].children[2].classList.remove('etp');
  }
  bxf.addEventListener('mouseleave', rsf);
  bxf.addEventListener('mouseenter', asf);