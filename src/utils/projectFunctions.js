export const scrollAndPageFlipSound = () => {
    document.querySelector('.MainBlock').scrollTop = '0';
    setTimeout(() => {
        document.querySelector('audio').play();
    }, 0);
    setTimeout(() => {
        document.querySelector('audio').currentTime = 0;
    }, 0);
}

export const changePage = (array, props, goTo) => {
    array.map((item, pos, array) => {
      if (item.pathName === props.location.pathname) {

        if (goTo === 'next') {
          if (pos === array.length - 1) {
            props.history.push(array[0].pathName)
          } else props.history.push(array[pos + 1].pathName)
        }

        if (goTo === 'prev') {
          if (pos === 0) {
            props.history.push(array[array.length - 1].pathName);
          } else props.history.push(array[pos - 1].pathName)
        }

      }
      return true
    })
}