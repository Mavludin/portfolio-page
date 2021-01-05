export const scrollToTop = () => {
  document.querySelector('.MainBlock').scrollTop = '0';
}

export const navigate = (links, nav, direction) => {
  links.map((item, pos, array) => {
      if (item.pathName === nav.location.pathname) {

        if (direction === 'next') {
          if (pos === array.length - 1) {
            nav.history.push(array[0].pathName)
          } else nav.history.push(array[pos + 1].pathName)
        }

        if (direction === 'prev') {
          if (pos === 0) {
            nav.history.push(array[array.length - 1].pathName);
          } else nav.history.push(array[pos - 1].pathName)
        }

      }
      return true
    })
}

// Caching images on the portfolio page
export const cacheImages = async (srcArray, setIsLoading) => {
  const promises = await srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  Promise.all(promises);

  setIsLoading(false);
};