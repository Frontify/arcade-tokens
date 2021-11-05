module.exports = {
    shadow: {
        _: {value: "{shadow.medium._.value}"},
        large: {
            _: { value: "0 25px 80px 0 {shadow.large.color.value}" },
            color: {
                value: "{color.neutral.15.value}",
                attributes: { category: 'color' },
                modify: [{
                    type: "alpha",
                    amount: 0.4
                }]
            },
        },
        medium: {
            _: { value: "0 3px 10px 0 {shadow.medium.color.value}" },
            top: { value: "0 -10px 10px -5px {shadow.medium.color.value}" },
            bottom: { value: "0 10px 10px -5px {shadow.medium.color.value}" },
            color: {
                value: "{color.neutral.15.value}",
                attributes: { category: 'color' },
                modify: [{
                    type: "alpha",
                    amount: 0.1
                }]
            },
        },
    },
}