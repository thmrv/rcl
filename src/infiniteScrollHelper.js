export default function infiniteScrollHelper(element, insert, endpoint) {
    var listElm = document.querySelector('#infinite-list');

    var nextItem = 1;
    var loadMore = function () {
        for (var i = 0; i < 20; i++) {
            var item = document.createElement('li');
            item.innerText = 'Item ' + nextItem++;
            listElm.appendChild(item);
        }
    }

    listElm.addEventListener('scroll', function () {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            loadMore();
        }
    });

    loadMore();
} 