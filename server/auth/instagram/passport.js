import passport from 'passport';
import {Strategy as InstagramStrategy} from 'passport-instagram';

export function setup(User, config) {
  passport.use(new InstagramStrategy({
          clientID: config.instagram.clientID,
          clientSecret: config.instagram.clientSecret,
    callbackURL: config.instagram.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    profile._json.id = `${profile._json.id}`;
    profile.id = `${profile.id}`;

    User.findOne({'instagram.id': profile.id}).exec()
      .then(user => {
        if(user) {
          return done(null, user);
        }

        user = new User({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'instagram',
          instagram: profile._json
        });
        user.save()
          .then(savedUser => done(null, savedUser))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
