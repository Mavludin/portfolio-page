export const scrollAndPageFlipSound = () => {
    document.querySelector('.MainBlock').scrollTop = '0';
    setTimeout(() => {
        document.querySelector('audio').play();
    }, 0);
    setTimeout(() => {
        document.querySelector('audio').currentTime = 0;
    }, 0);
}