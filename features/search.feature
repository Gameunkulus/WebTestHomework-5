Feature: Ticket tests 

    Scenario: Should buy one ticket
    Given user is on page "http://qamid.tmweb.ru/client/index.php" 
    When user select date;
    When user select time;
    When user select one seat;
    When user click booking button;
    Then user get text "После оплаты билет будет доступен в этом окне,"
    
    Scenario: Should buy two tickets
    Given user is on page "http://qamid.tmweb.ru/client/index.php" 
    When user select date;
    When user select time;
    When user select two seats;
    When user click booking button;
    Then user get text "После оплаты билет будет доступен в этом окне,"

    Scenario: Sad path
    Given user is on page "http://qamid.tmweb.ru/client/index.php" 
    When user select date;
    When user select time;
    When user select same seat;
    Then button for booking is inactive "true"
