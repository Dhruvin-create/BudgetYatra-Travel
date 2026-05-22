const mammoth = require('mammoth');

mammoth.extractRawText({path: 'SEO_budgetyatra_articles.docx'})
    .then(function(result){
        console.log(result.value);
    })
    .catch(function(error) {
        console.error(error);
    });