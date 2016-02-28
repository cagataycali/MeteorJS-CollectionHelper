Books = new Mongo.Collection('books');
Authors = new Mongo.Collection('authors');

Books.helpers({
  author: function() {
    return Authors.findOne(this.authorId);
  }
});

Authors.helpers({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  books: function() {
    return Books.find({ authorId: this._id });
  }
});

if (Meteor.isClient) {

  Template.books.helpers({
    books: function() {
      return Books.find();
    }
  });

}
