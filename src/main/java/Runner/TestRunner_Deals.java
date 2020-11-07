package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/mac/Desktop/restAssured/Eclipse-Project/FreeCrmBDDNaveenCucumber/src/main/java/com/Features/"
		, glue = {"stepDefinitions"}, 
		format = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit: junit_sml/cucumber.xml"},
		dryRun = true, 
		monochrome = true,
		strict = true
		)

public class TestRunner_Deals {

}
