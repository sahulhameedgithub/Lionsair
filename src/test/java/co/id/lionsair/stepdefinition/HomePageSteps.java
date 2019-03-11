package co.id.lionsair.stepdefinition;

import co.id.lionsair.object.HomePageRepository;
import co.id.lionsair.resource.FrequentlyUsedMethod;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageSteps {

	FrequentlyUsedMethod fum = new FrequentlyUsedMethod();
	HomePageRepository hp = new HomePageRepository();
	
	
	@Given("HomePage Test scenario for booking a ticket")
	public void homepage_Test_scenario_for_booking_a_ticket() {
	Hook.afterMethod();
	fum.getURL("http://www.lionair.co.id/");
	
	}
	

@When("The user should select all the required data to search a flight  {string}")
public void the_user_should_select_all_the_required_data_to_search_a_flight(String From) {

	fum.methodClick(hp.getFromCity());
	fum.selectCityFromData(From);
		
}

	

	@Then("The user should see the flight details")
	public void the_user_should_see_the_flight_details() {
	
	
	}
	
	
}
