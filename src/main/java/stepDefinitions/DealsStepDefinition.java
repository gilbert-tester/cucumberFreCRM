package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
/*
public class DealsStepDefinition {

	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_is_alrady_on_login_page() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

		driver.get("https://freecrm.com/");

	}

	@When("^Title of Login page is Free CRM$")
	public void title_of_Login_page_is_Free_CRM() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		String title = driver.getTitle();
		System.out.println(title);

		Assert.assertEquals("#1 Free CRM customer relationship management software cloud", title);
		driver.findElement(By.xpath("//span[contains (text(),'Log In')]")).click();
	}

	@Then("^user entered credentials username and password$")
	public void user_entered_credentials_username_and_password(DataTable credentials) {

		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));

		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();

	}

	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page() {

		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}

	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page() {
		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
		driver.findElement(By.xpath("//button[contains(text(), 'New')]")).click();
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) {

		List<List<String>> dealsValues = dealData.raw();
		driver.findElement(By.name("title")).sendKeys(dealsValues.get(0).get(0));
		driver.findElement(By.name("amount")).sendKeys(dealsValues.get(0).get(1));
		driver.findElement(By.name("probability")).sendKeys(dealsValues.get(0).get(2));
		driver.findElement(By.name("commission")).sendKeys(dealsValues.get(0).get(3));

		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
*/