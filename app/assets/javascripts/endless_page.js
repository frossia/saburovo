$('#posts').endlessScroll({
    fireOnce: true,
    fireDelay: 500,
    ceaseFire: function(){
        return $('#infinite-scroll').length ? false : true;
    },
    callback: function(){
        $.ajax({
            url: '/posts',
            data: {
                last: $(this).attr('last')
            },
            dataType: 'script'
        });
    }
});