//Variables for English and Spanish switches
var mainTitleEn = "Water Conservation Tips";
var mainTitleEs = "Consejos Para la Conservación del Agua";

var mainDescriptionEn = "It's important that we all do our part to use less water. Click through this app for tips and conservation ideas.";
var mainDescriptionEs = "Es importante que todos contribuyamos a usar menos agua. Explora esta aplicación para obtener consejos e ideas de conservación.";

var nextButtonEn = "Next";
var nextButtonEs = "Continuar";

var bottleLine1En = "Instead of buying diposable water bottled, use a refillable bottle. One use water bottles fill our landfills and trap valuable water.";
var bottleLine1Es = "En lugar de comprar agua embotellada desechable, usa una botella rellenable. Las botellas de agua de un solo uso llenan los vertederos y retienen agua valiosa.";

var bottleLine2En = "Choose the correct water bottle. Then click the faucet to fill.";
var bottleLine2Es = "Elige la botella de agua correcta. Luego, haz clic en el grifo para llenarla.";

var showerDescriptionEn = "Another way to conserve water is to take shorter showers. Try Setting a timer to five minutes!";
var showerDescriptionEs = "Otra forma de ahorrar agua es ducharse más corto. ¡Prueba a programar un temporizador de cinco minutos!";

var timerInstructionsEn = "Click on the timer.";
var timerInstructionsEs = "Haga clic en el temporizador.";

var homeButtonEn = "Home";
var homeButtonEs = "Hogar";

//Actual Functions
//! The actual code needs to be updated to commands that work, for now it's just gonna be formatted so that I can fix it and it'll work without much trouble

//English Translation
onEvent("buttonEn", "click", function() {
    //Main Page
    setText("mainPageTitle", mainTitleEn);
    setText("mainPageDesc", mainDescriptionEn);
    setText("nextButton1", nextButtonEn);
    //Bottle Page
    setText("bottlePageLine1", bottleLine1En);
    setText("bottlePageLine2", bottleLine2En);
    setText("nextButton2", nextButtonEn);
    //Shower Page
    setText("timerPageDesc", showerDescriptionEn);
    setText("timerInstructions", timerInstructionsEn);
    setText("homeButton", homeButtonEn);
})

//Spanish Translation
onEvent("buttonEs", "click", function() {
    //Main Page
    setText("mainPageTitle", mainTitleEs);
    setText("mainPageDesc", mainDescriptionEs);
    setText("nextButton1", nextButtonEs);
    //Bottle Page
    setText("bottlePageLine1", bottleLine1Es);
    setText("bottlePageLine2", bottleLine2Es);
    setText("nextButton2", nextButtonEs);
    //Shower Page
    setText("timerPageDesc", showerDescriptionEs);
    setText("timerInstructions", timerInstructionsEs);
    setText("homeButton", homeButtonEs);
})