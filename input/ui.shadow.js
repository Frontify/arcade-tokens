module.exports = {
    shadow: {
        large: {
            _: {value: "0 25px 80px 0 {shadow.large.color.value}"},
            color: {
                value: "{color.neutral.15.value}",
                attributes: {category: 'color'},
                modify: [{
                    type: "alpha",
                    amount: 0.4
                }]
            },
        },
    },
}