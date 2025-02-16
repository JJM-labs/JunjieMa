 window.addEventListener('load', function() {
       var wrapper = document.querySelector('.wrapper');
        fetch('header.html') // 确保路径正确
          .then(response => response.text())
          .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var header = doc.querySelector('header');
            if (header) {
              wrapper.insertBefore(header, wrapper.firstChild);
            }
          })
          .catch(e => console.error('加载header.html失败:', e));
      });
