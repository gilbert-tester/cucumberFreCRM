package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.joda.time.Seconds;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class LoginStepDefinition {

	WebDriver driver;
	
	
	@Given("^User is alrady on login page$")
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
		driver.findElement(By.xpath("//span[contains (text(), 'Log In')]")).click();
	}

	@Then("^user entered credentials \"(.*)\" and \"(.*)\"$")
	public void user_entered_username_And_password(String username, String password) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name = 'email']")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		driver.findElement(By.xpath("//*[@class='ui fluid large blue submit button']")).click();
		
	}

	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page()  {
	
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}
	
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page()  {
	
	driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
	driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	
	
	
	}

	@Then("^user enters contactInfo \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contactInfo_and_and(String arg1, String arg2, String arg3)  {
	
	driver.findElement(By.name("first_name")).sendKeys(arg1);
	driver.findElement(By.name("last_name")).sendKeys(arg2);
	driver.findElement(By.name("position")).sendKeys(arg3);
	
	}
	
	
	@Then("^Close the browser$")
	public void close_the_browser()  {
driver.quit();
	}
	
	
}
