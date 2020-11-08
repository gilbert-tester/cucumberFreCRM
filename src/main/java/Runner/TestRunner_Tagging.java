package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/mac/Desktop/restAssured/Eclipse-Project/FreeCrmBDDNaveenCucumber/src/main/java/com/Features/tagging.feature"
		, glue = {"stepDefinitions"}, 
		format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit: junit_sml/cucumber.xml"},
		dryRun = false, 
		monochrome = true,
		strict = true,
		tags= {"~@SmokeTest" , "~@E2ETest"} 
		
		)

public class TestRunner_Tagging {

}
//      ignore : ~@SmokeTest( ~ sign is used for ignore the tests)
//		OR : {"@SmokeTest , @E2ETest"} execute all tests tagged as @SmokeTest OR @RegresionTest
//		AND : {"@SmokeTest" , "@E2ETest"} execute all tests tagged as @SmokeTest and @RegresionTest (together)
