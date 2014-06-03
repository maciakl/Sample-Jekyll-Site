module.exports = ->

    @initConfig

        jshint:
            files: [ 'scripts.js' ]
            
            # Relax some options
            options:
                globals:
                    $: false
                    jQuery: false
                    _: false

        csslint:
            lint:
                options:
                    'ids': false
                    'box-model': false
                    'qualified-headings': false
                    'unique-headings': false

                src: [ 'style.css' ]

        validation:
            files: '_site/**/!(google*).html'

    @loadNpmTasks "grunt-contrib-jshint"
    @loadNpmTasks "grunt-contrib-csslint"
    @loadNpmTasks "grunt-html-validation"


    @registerTask "default", ["jshint", "csslint"]
