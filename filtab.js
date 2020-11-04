Array.prototype.showEvery = function (content_body, hidden_class, html_img, html_img_class) {
    if (html_img === void 0) {
        html_img = undefined;
    }
    if (html_img_class === void 0) {
        html_img_class = undefined;
    }
    this.forEach(function (title) {
        title.addEventListener('click', function () {
            // content
            content_body.forEach(function (content) {
                if (!html_img && !html_img_class) {
                    var content_body_data = content.dataset.tabFilter;
                    if (title.classList.contains(content_body_data)) {
                        content.classList.toggle(hidden_class);
                    }
                }
                else {
                    html_img.forEach(function (img) {
                        var content_body_data = content.dataset.tabFilter;
                        var html_img_data = img.dataset.tabImg;
                        if (title.classList.contains(content_body_data) &&
                            title.classList.contains(html_img_data)) {
                            content.classList.toggle(hidden_class);
                            img.classList.toggle(html_img_class);
                        }
                    });
                }
            });
        });
    });
};
Array.prototype.showOne = function (content_body, hidden_class, html_img, html_img_class) {
    if (html_img === void 0) {
        html_img = undefined;
    }
    if (html_img_class === void 0) {
        html_img_class = undefined;
    }
    function show(elements, img_elements) {
        if (img_elements === void 0) {
            img_elements = undefined;
        }
        if (!img_elements) {
            elements.forEach(function (item) { return item.classList.add(hidden_class); });
        }
        else {
            elements.forEach(function (item) { return item.classList.add(hidden_class); });
            img_elements.forEach(function (img) { return img.classList.remove(html_img_class); });
        }
    }
    function hide(elements, img_elements, index) {
        if (img_elements === void 0) {
            img_elements = undefined;
        }
        if (!img_elements) {
            elements[index].classList.remove(hidden_class);
        }
        else {
            elements[index].classList.remove(hidden_class);
            img_elements[index].classList.add(html_img_class);
        }
    }
    this.forEach(function (title) {
        title.addEventListener('click', function () {
            // content
            content_body.forEach(function (content, index) {
                if (!html_img && !html_img_class) {
                    var content_body_data = content.dataset.tabFilter;
                    if (title.classList.contains(content_body_data)) {
                        show(content_body, html_img);
                        hide(content_body, html_img, index);
                    }
                }
                else {
                    html_img.forEach(function (img) {
                        var content_body_data = content.dataset.tabFilter;
                        var html_img_data = img.dataset.tabImg;
                        if (title.classList.contains(content_body_data) &&
                            title.classList.contains(html_img_data)) {
                            show(content_body, html_img);
                            hide(content_body, html_img, index);
                        }
                    });
                }
            });
        });
    });
};
Array.prototype.changeText = function (content_body, first_text, second_text, hidden_class) {
    this.forEach(function(title) {
        title.addEventListener('click', function() {
            content_body.forEach(function(content) {
                var dataContent = content.dataset.tabFilter;

                if (title.classList.contains(dataContent)) {
                    content.classList.toggle(hidden_class);

                    if (!content.classList.contains(hidden_class)) { title.textContent = second_text }
                    else { title.textContent = first_text };
                }
            });
        });
    });
};
Array.prototype.showNext = function (hidden_class) {
    this.forEach(function(title) {
        title.addEventListener('click', function(event) {
            event.target.nextElementSibling.classList.toggle(hidden_class);
        });
    });
}

module.exports.showEvery = showEvery;
module.exports.showOne = showOne;
module.exports.changeText = showEvery;
module.exports.showNext = showNext;