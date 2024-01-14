Feature: Ticket tests 

    Scenario: Should buy one ticket
    Given user is on page "http://qamid.tmweb.ru/client/index.php" 
    When user select date;
    When user select time;
    When user select one seat;
    When user click booking button;
    When user click booking accept button;
    Then user get text "Покажите QR-код нашему контроллеру для подтверждения бронирования."
    
    Scenario: Should buy two ticket
    Given user is on page "http://qamid.tmweb.ru/client/index.php" 
    When user select date;
    When user select time;
    When user select two seats;
    When user click booking button;
    When user click booking accept button;
    Then user get text "Покажите QR-код нашему контроллеру для подтверждения бронирования."

    Scenario: Sad path
    Given user is on page "http://qamid.tmweb.ru/client/index.php" 
    When user select date;
    When user select time;
    When user select same seat;
    Then button for booking is inactive "true"
