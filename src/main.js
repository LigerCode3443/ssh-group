import { images } from './js/images';

const comment = [
  {
    avatar: '',
    name: '',
    time: '',
    description: '',
    other: '',
  },
  {
    avatar: '',
    name: '',
    time: '',
    description: '',
    other: '',
    commentFollower: [
      {
        avatar: '',
        name: '',
        description: '',
        time: '',
      },
    ],
  },
  {
    avatar: '',
    name: '',
    time: '',
    description: '',
    other: '',
  },
];

const question = [
  {
    title: 'Is the penis 8 inches or more in length?',
    avatar: images.img1,
  },
  {
    title: 'Have you exppirienced erectile problems or decrease in libido?',
    avatar: images.img2,
  },
  {
    title:
      'Are you currently taking any medications or supplements that might affect your sexual health?',
    avatar: images.img3,
  },
  {
    title:
      'Do you have any underlying health conditions, such as diabetes or hypertension?',
    avatar: images.img4,
  },
  {
    title:
      'Have you ever undergone any previous treatments or surgeries for sexual enhancement or related issues?',
    avatar: images.img5,
  },
  {
    title:
      'How important is it for you to have access to safe and effective medication for enhancing your sexual health?',
    avatar: images.img6,
  },
  {
    title: 'Do you think your wife is satisfied with the size of your penis?',
    avatar: images.img7,
  },
];

const imgElem = document.getElementById('img_box');
const titleElem = document.getElementById('title_box');
const btnElemYes = document.getElementById('btn_yes');
const btnElemNo = document.getElementById('btn_no');
const modalElem = document.getElementById('backdrop');
const boxElem = document.getElementById('box_qst').children;

const timerElem = document.getElementById('timer').children;

const formElem = document.getElementById('form_email');
const inputElem = document.getElementById('input_email');

function img(arr) {
  const imgArr = arr.map(
    item => `   <img
                src="${item.avatar}"
                alt="men"
                width="191"
                height="246"
              />`
  );
  return imgArr;
}
function tittle(arr) {
  const titleArr = arr.map(
    item => `  <p class="text_quiz">
                    ${item.title}
                  </p>`
  );
  return titleArr;
}
const imgArr = img(question);
const titleArr = tittle(question);

imgElem.innerHTML = imgArr[0];
titleElem.innerHTML = titleArr[0];
let currentCount = 0;
console.log(currentCount);

if (boxElem.length > 0) {
  boxElem[0].classList.add('active_quiz');
}
function showQuestion(currentCount) {
  imgElem.innerHTML = imgArr[currentCount];
  titleElem.innerHTML = titleArr[currentCount];
}
function onClick() {
  currentCount++;
  if (currentCount > 0) {
    boxElem[currentCount - 1].classList.remove('active_quiz');
  }
  console.log(boxElem.length);

  if (currentCount < boxElem.length)
    boxElem[currentCount].classList.add('active_quiz');
  if (currentCount + 1 > boxElem.length) {
    modalElem.classList.add('is_open');
    showTimer();
  }
  showQuestion(currentCount);
}
btnElemYes.addEventListener('click', onClick);
btnElemNo.addEventListener('click', onClick);

let second = 9;
let fullSecond = 5;
timerElem[2].innerHTML = fullSecond;
timerElem[3].innerHTML = second;
function showTimer(params) {
  const timer = setInterval(() => {
    second--;
    if (second < 0) {
      fullSecond--;
      second = 9;
    }
    timerElem[2].innerHTML = fullSecond;
    timerElem[3].innerHTML = second;
    if (fullSecond === 0 && second === 0) {
      fullSecond = 6;
      second = 0;
    }
  }, 1000);
}

formElem.addEventListener('submit', e => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = inputElem.value;
  if (value.trim().length === 0) {
    alert('Please fill in the email field');
    return;
  }
  if (!emailPattern.test(value)) {
    alert('Check if the email address is correct');
    return;
  }
  //   fetch("https://your-api-endpoint.com/send-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(value),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  imgElem.innerHTML = imgArr[0];
  titleElem.innerHTML = titleArr[0];
  modalElem.classList.remove('is_open');
  formElem.reset();
});
