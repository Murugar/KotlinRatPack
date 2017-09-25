ratpack.handlers(function(chain) {
    chain.get(function(ctx) {
        ctx.render("Hello Kotlin Rat World!");
    })
});
