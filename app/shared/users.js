
app.service('Users', function(Day, Way) {

    function Ride(time, day, way, driver) {
        this.time = time;
        this.day = day;
        this.driver = driver;
        this.way = way;
    }

    function User(id) {
        var self = this;

        this.id = id;
        this.email = null;
        this.password = null;

        this.name = undefined;
        this.phone = undefined;
        this.address = undefined;
        this.photo_url = 'https://lh3.googleusercontent.com/-yysr8_T4r7k/AAAAAAAAAAI/AAAAAAAAAAA/EnhQ3HVLDok/photo.jpg';

        this.rides = new Array();
        this.friends = new Array();

        this.addRide = function(time, day, way, driver) {
            self.rides.push(new Ride(time, day, way, driver));
        }

        this.addFriend = function(user) {
            self.friends.push(user);
        }

        this.removeFriend = function(user) {
            self.friends = _.without(self.friends, user);
        }

        this.hasFriend = function(user) {
            return _.contains(self.friends, user)
        }
    };

    // Fake users

    var user1 = new User('dilma');
    var user2 = new User('einstein');
    var user3 = new User('safadao');

    var user_list = [
        user1, user2, user3
    ];

    user1.addFriend(user2);
    user1.addFriend(user3);
    user2.addFriend(user1);
    user3.addFriend(user2);

    user1.name = 'Dilma Rousseff';
    user2.name = 'Albert Einstein';
    user3.name = 'Wesley Safadão';

    user1.email = 'dilmona@presidente.br';
    user1.phone = '33331122';
    user1.address = 'Casa Branca';
    user1.photo_url = 'http://static2.blastingnews.com/media/photogallery/2016/2/23/290x290/b_290x290/salario-de-dilma-devera-ser-reduzido_615715.jpg';

    user1.addRide(1000, Day.SUN, Way.FROM, user2);
    user1.addRide(730, Day.SUN, Way.TO, user1);
    user1.addRide(800, Day.MON, Way.TO, user2);
    user1.addRide(800, Day.TUE, Way.FROM, user3);
    user1.addRide(1130, Day.THU, Way.TO, user1);
    user1.addRide(730, Day.THU, Way.FROM, user2);
    user1.addRide(730, Day.SAT, Way.TO, user3);
    user1.addRide(1300, Day.SUN, Way.FROM, user2);
    user1.addRide(500, Day.SUN, Way.TO, user1);

    user2.addRide(500, Day.TUE, Way.TO, user1);

    // End fake users

    this.loggedUser = user1;

    this.areFriends = function(user1, user2) {
        if(user1 === null || user2 === null) return false;
        return user1.hasFriend(user2) && user2.hasFriend(user1);
    };

    this.get = function(uid) {
        return _.find(user_list, function(user) {
            return user.id === uid;
        });
    };
});