const scrollAndPageFlip = () => {
    document.querySelector('.MainBlock').scrollTop = '0';
    document.querySelector('audio').play();
    document.querySelector('audio').currentTime = 0;
}

export default scrollAndPageFlip;