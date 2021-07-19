// Nav backwards
export const navBack = (links, nav) => {
  links.map((item, pos, array) => {
      if (item.pathName === nav.location.pathname) {
        if (pos === 0) {
          nav.history.push(array[array.length - 1].pathName);
        } else nav.history.push(array[pos - 1].pathName)
      }
      return true
    })
}

// Nav forward
export const navForward = (links, nav) => {
  links.map((item, pos, array) => {
    if (item.pathName === nav.location.pathname) {
      if (pos === array.length - 1) {
        nav.history.push(array[0].pathName)
      } else nav.history.push(array[pos + 1].pathName)
    }
    return true
  })
}

// Caching images on the projects page
export const cacheImages = async (srcArray, setIsLoading) => {
  const promises = await srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src.thumbnail;
      img.onload = () => resolve()
      img.onerror = (error) => reject(error)
    });
  });

  await Promise.all(promises);

  setIsLoading(false);
};