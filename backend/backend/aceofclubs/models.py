from django.db import models




class Permission(models.Model):
    description = models.TextField()

    def __str__(self):
        return self.description

class Group(models.Model):
    name = models.TextField()
    description = models.TextField()

    def __str__(self):
        return self.name


class EventType(models.Model):
    description = models.TextField()

    def __str__(self):
        return self.description

class Event(models.Model):
    name = models.TextField(),
    description = models.TextField(),
    start_time = models.TimeField(),
    end_time = models.TimeField(),
    start_date = models.DateField(),
    end_date = models.DateField(),
    active = models.BooleanField(),
    group = models.ManyToManyField('Group', blank=False),
    eventType = models.ManyToManyField('EventType', blank=False)

    def __str__(self):
        return self.name

class User(models.Model):
    email = models.TextField(),
    first_name = models.TextField(),
    last_name = models.TextField(),
    pwhash = models.TextField(),
    active = models.BooleanField(),
    permission = models.ForeignKey('Permission', null=False, on_delete=models.CASCADE),
    group = models.ForeignKey('Group', null=False, on_delete=models.DO_NOTHING),
    event = models.ManyToManyField('Event', blank=True)

    def __str__(self):
        return self.email



class State(models.Model):
    description = models.TextField

    def __str__(self):
        return self.description


