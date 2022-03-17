"use strict";

function RootUI() {
  this.version = '1.0.9';
}

 /* ROOT UI JS는 시맨틱 UI의 코드 스타일과 일부 코드를 사용하여 제작되었습니다. */

 /*
 * # Semantic UI - 2.4.1
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

RootUI.prototype.accordion = function() {
  var
    $allModules = $(arguments[0]),

    query          = arguments[1],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.accordion.settings, query)
          : $.extend({}, RootUI.prototype.accordion.settings),

        selector        = settings.selector,
        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        
        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,

        $module         = $(this),
        $headers,
        $items,
        $contents,
        $currentItem,
        $currentContent,

        instance        = $module.data(moduleNamespace),
        element         = this,
        initialLoad,

        elementEventNamespace,
        id,
    
        module
      ;

      module = {
        initialize: function() {
          module.setup();
          module.instantiate();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          module.set.initialLoad();
          module.set.headers();
          module.set.items();
          module.set.contents();
          module.set.id();
          if(settings.firstAutoOpen) module.change(settings.path);
          module.remove.initialLoad();
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        change: function(target, methodValue) {
          if(!initialLoad) settings.onChanging.call(element);

          if(methodValue !== undefined) target = methodValue;

          if(target) {
            if(target === 'allOpen') {
              module.active.item(target);
              module.active.content(target);

              return false;
            }
            else if(target === 'allClose') {
              module.inactive.item(target);
              module.inactive.content(target);

              return false;
            }
            else {
              var isActive = module.is.active(target);
  
              if(isActive) {
                if(settings.collapsible) {
                  
                  module.current(target);
                  module.close(target);

                  if(settings.closeNested) {
                    module.inactive.nastedItem();
                    module.inactive.nastedContent();
                  }
                }
                else {
                  return false;
                }
              }
              else {
                if(settings.exclusive) {
                  if(settings.closeNested) {
                    module.inactive.nastedItem();
                    module.inactive.nastedContent();
                  }

                  module.close('allClose');
                }
                module.current(target);
                module.open(target);
              }
              
              return false;
            }
          }
          
          var useData = $items.eq(0).data(metadata.accordion) !== undefined;

          useData
            ? target = $items.eq(0).data(metadata.accordion)
            : target = $items.eq(0)
          ;

          module.current(target);
          module.open();

          if(!initialLoad) settings.onChange.call(element);
        },

        current: function(target) {
          module.set.currentItem(target);
          module.set.currentContent(target);
        },

        open: function(target) {
          settings.onOpening.call(element);
          module.active.item(target);
          module.active.content(target);
        },

        close: function(target) {
          settings.onClosing.call(element);
          module.inactive.item(target);
          module.inactive.content(target);
        },

        destroy: function() {
          module.close('allClose');
          module.unbind.events();
          $module.removeData(moduleNamespace);
        },

        active: {
          item: function(target) {
            var $target;

            target === 'allOpen'
              ? $target = $items
              : $target = $currentItem
            ;

            $target.addClass(className.active);
          },

          content: function(target) {
            var
              $target,
              duration
            ;

            initialLoad ? duration = 0 : duration = settings.duration;

            target === 'allOpen'
              ? $target = $contents
              : $target = $currentContent
            ;

            $target
              .addClass(className.active)
              .stop(true, true)
              .slideDown({
                duration: duration,
                easing: settings.easing
              }, function() {
                settings.onOpen.call(element);
              })
            ;
          }
        },

        inactive: {
          item: function(target) {
            var $target;

            target === 'allClose'
              ? $target = $items
              : $target = $currentItem
            ;

            if($target !== undefined) $target.removeClass(className.active);
          },

          content: function(target) {
            var
              $target,
              duration
            ;

            initialLoad ? duration = 0 : duration = settings.duration;

            target === 'allClose'
              ? $target = $contents
              : $target = $currentContent
            ;

            if($target !== undefined) {
              $target
                .removeClass(className.active)
                .stop(true, true)
                .slideUp({
                  duration: duration,
                  easing: settings.easing
                }, function() {
                  settings.onClose.call(element);
                })
              ;
            }
          },

          nastedItem: function() {
            $currentContent.find(selector.item).removeClass(className.active);
          },

          nastedContent: function() {
            var duration;

            initialLoad ? duration = 0 : duration = settings.duration;

            $currentContent
              .find(selector.content)
              .removeClass(className.active)
              .stop()
              .slideUp({
                duration: duration,
                easing: settings.easing
              })
            ;
          }
        },

        each: {
          
        },

        create: {
          
        },

        is: {
          active: function(target) {
            switch(typeof target) {
              case 'object':
                return $(target).hasClass(className.active);

              case 'string':
                return $headers
                  .find(selector.item + '[data-' + metadata.accordion + '="' + target + '"]')
                  .hasClass(className.active)
                ;

              case 'number':
                return $headers
                  .eq(target)
                  .find(selector.item)
                  .hasClass(className.active)
                ;
            }
          }
        },

        should: {

        },

        get: {
          current: {
            metadata: function() {
              return $currentItem.attr('data-' + metadata.accordion);
            },
  
            index: function() {
              return $items.index($currentItem);
            }
          },

          select: {
            metadata: function(target) {
              return $(target).attr('data-' + metadata.accordion);
            },
  
            index: function(target) {
              return $items.index(target)
            }
          }
        },

        set: {
          initialLoad: function() {
            initialLoad = true;
          },

          headers: function() {
            $headers = $module
              .find(selector.header)
              .first()
              .parent()
              .children(selector.header)
            ;
          },

          items: function() {
            $items = $headers.find(selector.item);
          },

          contents: function() {
            $contents = $headers.first().siblings(selector.content);
          },

          currentItem: function(target) {
            switch(typeof target) {
              case 'object':
                $currentItem = $(target);
                break;

              case 'string':
                var
                  $target = $items.filter(selector.item + '[data-' + metadata.accordion + '="' + target + '"]'),
                  hasTarget = $target.length
                ;
                hasTarget
                  ? $currentItem = $target
                  : $currentItem = $items.first()
                ;
                break;

              case 'number':
                var
                  $target = $items.eq(target),
                  hasTarget = $target.length
                ;
                hasTarget
                  ? $currentItem = $target
                  : $currentItem = $items.first()
                ;
                break;
            }
          },

          currentContent: function(target) {
            switch(typeof target) {
              case 'object':
                $currentContent = $(target).parent(selector.header).next(selector.content);
                break;

              case 'string':
                var
                  $target = $contents.filter(selector.content + '[data-' + metadata.accordion + '="' + target + '"]'),
                  hasTarget = $target.length
                ;
                hasTarget
                  ? $currentContent = $target
                  : $currentContent = $contents.first()
                ;
                break;

              case 'number':
                var
                  $target = $contents.eq(target),
                  hasTarget = $target.length
                ;
                hasTarget
                  ? $currentContent = $target
                  : $currentContent = $contents.first()
                ;
                break;
            }
          },

          id: function() {
            id = (Math.random().toString(16) + '000000000').substr(2, 8);
            elementEventNamespace = '.' + id;
          }
        },

        remove: {
          initialLoad: function() {
            initialLoad = false;
          }
        },

        bind: {
          events: function() {
            $headers
              .on('click' + elementEventNamespace, selector.item, module.event.click)
            ;
          }
        },

        unbind: {
          events: function() {
            $headers
              .off('click' + elementEventNamespace)
            ;
          }
        },

        event: {
          click: function(event) {
            if(!settings.block) {
              var path = $(this).data(metadata.accordion);
  
              path
                ? module.change(path)
                : module.change(this)
              ;
            }

            event.preventDefault();
          }
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
}

RootUI.prototype.accordion.settings = {
  name          : 'Accordion',
  namespace     : 'accordion',

  metadata      : {
    accordion   : 'accordion'
  },

  selector      : {
    accordion   : '.accordion',
    header      : '.accordion-header',
    item        : '.accordion-item',
    content     : '.accordion-content'
  },
  
  className     : {
    active      : 'is-active'
  },

  firstAutoOpen : true,
  collapsible   : true,
  exclusive     : true,
  closeNested   : false,
  path          : false,
  block         : false,
  duration      : 250,
  easing        : 'swing',

  onOpening     : function() {},
  onOpen        : function() {},
  onClosing     : function() {},
  onClose       : function() {},
  onChanging    : function() {},
  onChange      : function() {}
};

RootUI.prototype.checker = function() {
  var
    $allModules    = $(arguments[0]),
    
    query          = arguments[1],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings        = $.extend(true, {}, RootUI.prototype.checker.settings, query),

        selector        = settings.selector,
        className       = settings.className,
        namespace       = settings.namespace,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

        $module         = $(this),
        $input          = $(this).children(selector.input),
        input           = $input[0],
        $target         = null,

        initialLoad     = false,
        shortcutPressed = false,
        instance        = $module.data(moduleNamespace),
        element         = this,

        module
      ;
      
      module = {
        initialize: function() {
          module.bind.events();
          module.instantiate();
          module.setup();
        },

        instantiate: function() {
          instance = module;
          $module.data(moduleNamespace, module);
        },

        setup: function() {
          module.set.initialLoad();

          if(module.is.indeterminate()) {
            module.indeterminate();
          }
          else if(module.is.checked()) {
            module.check();
          }
          else {
            module.uncheck();
          }

          if(module.is.disabled()) {
            module.disable();
          }

          module.remove.initialLoad();

          settings.onLoad.call(element);
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        check: function() {
          if(!module.can.change() || !module.should.allowCheck()) { return; }
          module.set.checked();
          if(!module.should.ignoreCallbacks()) {
            settings.onChecked.call(element);
            settings.onChange.call(element);
          }
        },

        uncheck: function() {
          if(!module.can.change() || !module.should.allowUncheck()) { return; }
          module.set.unchecked();
          if(!module.should.ignoreCallbacks()) {
            settings.onUnchecked.call(element);
            settings.onChange.call(element);
          }
        },

        indeterminate: function() {
          if(!module.can.change() || !module.should.allowIndeterminate()) { return; }
          module.set.indeterminate();
          if(!module.should.ignoreCallbacks()) {
            settings.onIndeterminate.call(element);
            settings.onChange.call(element);
          }
        },

        determinate: function() {
          if(!module.can.change() || !module.should.allowDeterminate()) { return; }
          module.set.determinate();
          if(!module.should.ignoreCallbacks()) {
            settings.onDeterminate.call(element);
            settings.onChange.call(element);
          }
        },

        enable: function() {
          if(module.is.enabled() && !module.is.initialLoad()) { return; }
          module.set.enabled();
          if(!module.should.ignoreCallbacks()) {
            settings.onEnable.call(element);
          }
        },

        disable: function() {
          if(module.is.disabled() && !module.is.initialLoad()) { return; }
          module.set.disabled();
          if(!module.should.ignoreCallbacks()) {
            settings.onDisable.call(element);
          }
        },

        toggle: function() {
          if(!module.can.change()) { return; }
          if(module.is.indeterminate() || module.is.unchecked()) {
            module.check();
          }
          else if(module.is.checked() && module.can.uncheck()) {
            module.uncheck();
          }
        },

        readonly: function() {
          if(!module.is.readonly()) {
            module.set.readonly();
          }
          if(!module.should.ignoreCallbacks()) {
            settings.onReadonly.call(element);
          }
        },

        write: function() {
          if(module.is.readonly()) {
            module.set.wrote();
          }
          if(!module.should.ignoreCallbacks()) {
            settings.onWrite.call(element);
          }
        },

        each: {
          
        },

        create: {
          
        },

        is: {
          initialLoad: function() {
            return initialLoad;
          },

          checked: function() {
            return $input.prop('checked') !== undefined && $input.prop('checked');
          },

          unchecked: function() {
            return !module.is.checked();
          },

          enabled: function() {
            return !module.is.disabled();
          },

          disabled: function() {
            return $input.prop('disabled') !== undefined && $input.prop('disabled');
          },

          indeterminate: function() {
            return $input.prop('indeterminate') !== undefined && $input.prop('indeterminate');
          },

          determinate: function() {
            return !module.is.indeterminate();
          },

          readonly: function() {
            return $module.hasClass(className.readonly);
          },

          wrote: function() {
            return !module.is.readonly();
          },

          radio: function() {
            return $input.attr('type') == 'radio';
          }
        },

        should: {
          allowCheck: function() {
            if(module.is.determinate() && module.is.checked()) {
              return false;
            }
            if(settings.beforeChecked.apply(element) === false) {
              return false;
            }
            return true;
          },

          allowUncheck: function() {
            if(module.is.determinate() && module.is.unchecked()) {
              return false;
            }
            if(settings.beforeUnchecked.apply(element) === false) {
              return false;
            }
            return true;
          },

          allowIndeterminate: function() {
            if(module.is.indeterminate() && !module.should.forceCallbacks()) {
              return false;
            }
            if(settings.beforeIndeterminate.apply(element) === false) {
              return false;
            }
            return true;
          },

          allowDeterminate: function() {
            if(module.is.determinate() && !module.should.forceCallbacks()) {
              return false;
            }
            if(settings.beforeDeterminate.apply(element) === false) {
              return false;
            }
            return true;
          },

          forceCallbacks: function() {
            return (module.is.initialLoad() && settings.fireOnInit);
          },

          ignoreCallbacks: function() {
            return (module.is.initialLoad() && !settings.fireOnInit);
          }
        },

        can: {
          change: function() {
            return !(module.is.disabled() || module.is.readonly());
          },

          uncheck: function() {
            return (typeof settings.uncheckable === 'boolean')
              ? settings.uncheckable
              : !module.is.radio()
            ;
          }
        },

        get: {
          
        },

        set: {
          initialLoad: function() {
            initialLoad = true;
          },

          checked: function() {
            $module
              .removeClass(className.indeterminate)
              .addClass(className.checked)
            ;
            $input
              .prop('indeterminate', false)
              .prop('checked', true)
            ;
          },

          unchecked: function() {
            $module
              .removeClass(className.indeterminate)
              .removeClass(className.checked)
            ;
            $input
              .prop('indeterminate', false)
              .prop('checked', false)
            ;
          },

          indeterminate: function() {
            $module
              .addClass(className.indeterminate)
              .removeClass(className.checked)
            ;
            $input
              .prop('indeterminate', true)
              .prop('checked', false)
            ;
          },

          determinate: function() {
            $module.removeClass(className.indeterminate);
            $input.prop('indeterminate', false);
          },

          enabled: function() {
            $module.removeClass(className.disabled);
            $input.prop('disabled', false);
          },

          disabled: function() {
            $module.addClass(className.disabled);
            $input.prop('disabled', 'disabled');
          },

          readonly: function() {
            $module.addClass(className.readonly);
            $input.prop('readonly', true);
          },

          wrote: function() {
            $module.removeClass(className.readonly);
            $input.prop('readonly', false);
          }
        },

        remove: {
          initialLoad: function() {
            initialLoad = false;
          }
        },

        bind: {
          events: function() {
            $module
              .on('click',  + eventNamespace, selector.label, module.event.click)
              .on('keydown' + eventNamespace, selector.input, module.event.keydown)
              .on('keyup'   + eventNamespace, selector.input, module.event.keyup)
            ;
          }
        },

        event: {
          click: function(event) {
            $target = $(event.target);

            if($target.is(selector.link)) {
              return;
            }

            if(module.is.enabled()) {
              module.toggle();
              $input.focus();
              event.preventDefault();
            }
          },

          keydown: function(event) {
            var
              key     = event.which,
              keyCode = {
                enter  : 13,
                space  : 32,
              }
            ;

            if(!event.ctrlKey && (key == keyCode.space || key == keyCode.enter)) {
              module.toggle();
              shortcutPressed = true;
            }else {
              shortcutPressed = false;
            }
          },

          keyup: function(event) {
            if(shortcutPressed) {
              event.preventDefault();
            }
          }
        },
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
}

RootUI.prototype.checker.settings = {
  name                : 'Checker',
  namespace           : 'checker',

  selector            : {
    input             : 'input[type="checkbox"], input[type="radio"]',
    label             : 'label',
  },
  
  className           : {
    checked           : 'is-checked',
    disabled          : 'is-disabled',
    indeterminate     : 'is-indeterminate',
    readonly          : 'is-readonly'
  },

  uncheckable         : 'auto',
  fireOnInit          : false,
  
  onLoad              : function() {},
  onChange            : function() {},
  onChecked           : function() {},
  onUnchecked         : function() {},
  onDeterminate       : function() {},
  onIndeterminate     : function() {},
  onEnable            : function() {},
  onDisable           : function() {},
  onReadonly          : function() {},
  onWrite             : function() {},

  beforeChecked       : function() {},
  beforeUnchecked     : function() {},
  beforeDeterminate   : function() {},
  beforeIndeterminate : function() {}
}

RootUI.prototype.modal = function() {
  var
    $allModules    = $(arguments[0]),
    $window        = $(window),
    $body          = $('body'),

    query          = arguments[1],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.modal.settings, query)
          : $.extend({}, RootUI.prototype.modal.settings),

        selector        = settings.selector,
        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        
        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,

        $module         = $(this),
        instance        = $module.data(moduleNamespace),
        element         = this,

        offsetY,
        
        module
      ;
      
      module = {
        initialize: function() {
          module.bind.events();
          module.instantiate();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        show: function() {
          if(module.is.show()) return;
          
          settings.onShow.call(element);
          module.set.show();

          if(settings.scrollLock) {
            module.set.offsetY();
            module.set.positionTop();
            module.set.fixed();
          }

          settings.onVisible.call(element);
        },

        hide: function() {
          if(!module.is.show()) return;
          
          settings.onHide.call(element);
          module.set.hide();

          if(settings.scrollLock) {
            module.remove.fixed();
            module.remove.positionTop();
            module.set.scrollTop();
          }
          
          settings.onHidden.call(element);
        },

        each: {
          
        },

        create: {
          
        },

        is: {
          show: function() {
            return $module.hasClass(className.show);
          },

          hide: function() {
            return !module.is.show();
          }
        },

        should: {

        },

        get: {
          offsetY: function() {
            return $window.scrollTop();
          }
        },

        set: {
          show: function() {
            $module.addClass(className.show);
          },

          hide: function() {
            $module.removeClass(className.show);
          },

          fixed: function() {
            $body.addClass(className.fixed);
          },

          offsetY: function() {
            offsetY = $window.scrollTop();
          },

          scrollTop: function() {
            $window.scrollTop(offsetY);
          },

          positionTop: function() {
            $body.css('top', -offsetY);
          }
        },

        remove: {
          fixed: function() {
            $body.removeClass(className.fixed);
          },

          positionTop: function() {
            $body.css('top', '');
          }
        },

        bind: {
          events: function() {
            if(settings.on == 'click' || settings.on == 'mousedown') {
              $module
                .on('mousedown', module.event.mousedown)
              ;
            }
          }
        },

        event: {
          mousedown: function(event) {
            if(event.target == this) module.hide();
          }
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

RootUI.prototype.modal.settings = {
  name         : 'Modal',
  namespace    : 'modal',

  metadata     : {
    modal      : 'modal'
  },
  
  className    : {
    show       : 'is-show',
    fixed      : 'is-fixed'
  },

  on           : 'click',
  scrollLock   : true,

  onShow       : function() {},
  onVisible    : function() {},
  onHide       : function() {},
  onHidden     : function() {}
};

RootUI.prototype.select = function() {
  var
    $allModules    = $(arguments[0]),
    $window        = $(window),
    $document      = $(document),
    $html          = $('html'),
    $body          = $('body'),

    query          = arguments[1],
    methodValue    = arguments[2],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.select.settings, query)
          : $.extend({}, RootUI.prototype.select.settings),

        selector        = settings.selector,
        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        
        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,

        $module         = $(this),
        
        instance        = $module.data(moduleNamespace),
        element         = this,
        initialLoad,

        offsetY,
    
        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.instantiate();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          module.set.initialLoad();

          if(settings.usePseudo) {
            module.create.pseudo();
            module.set.origin.tabIndex();
            module.set.origin.hidden();
            if(settings.useModal) {
              module.set.modal(); 
            }
          }
          
          if(settings.selectedValue !== false) {
            module.change(settings.selectedValue);
          }

          settings.onLoad.call(element);

          module.remove.initialLoad();
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        active: function() {
          if(module.is.active()) return false;

          module.set.active();
          module.is.spaceFull()
            ? module.set.upward()
            : module.remove.upward()
          ;
          if(settings.useModal && settings.scrollLock) {
            module.set.offsetY();
            module.set.positionTop();
            module.set.fixed();
          }
          module.focus.pseudo.selectedItem();
          settings.onActive.call(element);
        },

        inactive: function() {
          if(!module.is.active()) return false;

          module.set.inactive();
          module.remove.upward();
          if(settings.useModal && settings.scrollLock) {
            module.remove.fixed();
            module.remove.positionTop();
            module.set.scrollTop();
          }
          module.focus.pseudo.selected();
          settings.onInactive.call(element);
        },

        change: function(event, methodValue) {
          var
            selectedValue = module.get.value(),
            selectValue,
            target
          ;

          if(settings.usePseudo) {
            switch(typeof event) {
              case 'object':
                selectValue = $(event).attr('data-' + metadata.value);
                target      = event;
  
                break;
  
              case 'string':
                if(typeof methodValue === 'string') {
                  selectValue = methodValue;

                  target      = $module.find(selector.pseudo.item + '[data-' + metadata.value + '=' + selectValue + ']').get(0);
    
                  break;
                }
                else if(typeof methodValue === 'number') {
                  var $options = $module.find(selector.pseudo.option);
                  selectValue  = $options.eq(methodValue).find(selector.pseudo.item).attr('data-' + metadata.value);
                  target       = $options.eq(methodValue).find(selector.pseudo.item).get(0);
    
                  break;
                }
                
              default:
                return false;
            }
  
            var hasTarget = target !== undefined;
  
            if(selectValue !== selectedValue && hasTarget) {
              module.set.origin.selected(target);
              module.set.pseudo.selected();
              module.set.pseudo.selectedItem();
            }
            else {
              return false;
            }
          }
          else {
            module.set.origin.selected(event);
          }
          if(!initialLoad) settings.onChange.call(element);
        },

        destroy: function() {
          module.unbind.events();
          module.inactive();
          if(settings.useModal) {
            module.remove.modal();
          }
          module.remove.origin.tabIndex();
          module.remove.origin.hidden();
          module.remove.pseudo.select();
          module.remove.data();
        },

        each: {
          
        },

        create: {
          pseudo: function() {
            $module
              .append(settings.tag.select)
              .children()
              .last()
              .addClass(className.pseudo.select)
              .append(settings.tag.selected)
              .children()
              .addClass(className.pseudo.selected)
            ;

            module.set.pseudo.selected();

            $module
              .find(selector.pseudo.select)
              .append(settings.tag.list)
              .children()
              .last()
              .addClass(className.pseudo.list)
            ;

            var
              $originOption = $module.find(selector.origin.option),
              $pseudoList = $module.find(selector.pseudo.list),
              $pseudoOptgroup,
              $pseudoLabel,
              $pseudoOption,
              $pseudoItem
            ;

            if($pseudoList.children().length) {
              $pseudoList = $pseudoList.children();
            }

            $originOption.each(function(index, event) {
              var tagName = $(event).parent().prop('tagName');

              if(tagName == 'SELECT') {
                $pseudoList.append(settings.tag.option);
                $pseudoOption = $pseudoList.children().last().addClass(className.pseudo.option);
              }else if(tagName == 'OPTGROUP') {
                var hasPrevElement = $(event).prev().length > 0;
                if(!hasPrevElement) {
                  $pseudoList.append(settings.tag.optgroup);
                  $pseudoOptgroup = $pseudoList.children().last();
                  $pseudoOptgroup.addClass(className.pseudo.optgroup);
                  $pseudoOptgroup.prepend(settings.tag.label);
                  $pseudoLabel = $pseudoOptgroup.children().first().addClass(className.pseudo.label);
                  $pseudoLabel.text($(event).parent().attr(metadata.label));
                  $pseudoOptgroup = $pseudoLabel.next() && $pseudoOptgroup.children().last();
                }

                $pseudoOptgroup.append(settings.tag.option);
                $pseudoOption = $pseudoOptgroup
                  .children()
                  .last()
                  .addClass(className.pseudo.option)
                ;
              }

              $pseudoOption.append(settings.tag.item);
              $pseudoItem = $pseudoOption
                .children()
                .addClass(className.pseudo.item)
              ;

              var
                value = $(event).attr(metadata.value),
                text  = $(event).text()
              ;

              $pseudoItem
                .attr('data-' + metadata.value, value)
                .text(text)
              ;
            });

            module.set.pseudo.selectedItem();
          }
        },

        is: {
          active: function() {
            return $module.hasClass(className.active);
          },

          inactive: function() {
            return !module.is.active();
          },

          modal: function() {
            return $module.hasClass(className.modal);
          },

          spaceFull: function() {
            var
              windowHeight    = $window.height(),
              windowScrollTop = $window.scrollTop(),
              moduleOffset    = $module.offset().top,
              moduleHeight    = $module.outerHeight(),
              listHeight      = $module.find(selector.pseudo.list).outerHeight()
            ;
            return (windowHeight + windowScrollTop) <= (moduleOffset + moduleHeight + listHeight);
          },

          ie: function() {
            return $html.attr('data-' + metadata.browser) == settings.value.ie;
          }
        },

        should: {

        },

        get: {
          value: function() {
            return $module.find(selector.origin.option + selector.origin.selected)[0].value;
          },

          text: function() {
            return $module.find(selector.origin.option + selector.origin.selected)[0].text;
          },

          offsetY: function() {
            return $window.scrollTop();
          },

          origin: {
            selected: function() {
              return $module.find(selector.origin.option + selector.origin.selected)[0];
            }
          },

          focused: {
            index: function() {
              var
                $options = $module.find(selector.pseudo.option),
                index
              ;

              $options.each(function(i) {
                if($(this).find(selector.pseudo.item + ':focus').length) {
                  index = i;
                  return false;
                }
              });

              return index;
            }
          },

          selected: {
            index: function() {
              var
                $options = $module.find(selector.pseudo.option),
                index
              ;

              $options.each(function(i) {
                if($(this).find(selector.pseudo.item).hasClass(className.selected)) {
                  index = i;
                  return false;
                }
              });

              return index;
            }
          }
        },

        set: {
          initialLoad: function() {
            initialLoad = true;
          },

          active: function() {
            $module.addClass(className.active);
          },

          inactive: function() {
            $module.removeClass(className.active);
          },

          modal: function() {
            $module
              .addClass(className.modal)
            ;
          },

          fixed: function() {
            $body
              .addClass(className.fixed)
            ;
          },

          offsetY: function() {
            offsetY = $window.scrollTop();
          },

          scrollTop: function() {
            $window.scrollTop(offsetY);
          },

          positionTop: function() {
            $body.css('top', -offsetY);
          },

          origin: {
            selected: function(target) {
              var value;

              if(settings.usePseudo) {
                value = $(target).attr('data-' + metadata.value);
              }
              else {
                switch(typeof target) {
                  case 'string':
                    value = target;
                    break;
                  
                  case 'number':
                    value = $module.find(selector.origin.option).eq(target).val();
                    break;
                }
              }

              $module
                .find(selector.origin.select)
                .val(value)
              ;
            },

            tabIndex: function() {
              $module
                .find(selector.origin.select)
                .attr('tabindex', -1)
              ;
            },

            hidden: function() {
              $module
                .find(selector.origin.select)
                .addClass(className.hidden)
              ;
            }
          },

          pseudo: {
            selected: function() {
              var
                value = module.get.value(),
                text  = module.get.text()
              ;

              $module
                .find(selector.pseudo.selected)
                .attr('data-' + metadata.value, value)
                .text(text)
              ;
            },

            selectedItem: function() {
              var value = module.get.value();

              $module
                .find(selector.pseudo.item)
                .removeClass(className.selected)
              ;
              
              $module
                .find(selector.pseudo.item + '[data-' + metadata.value + '=' + value + ']')
                .addClass(className.selected)
              ;
            }
          },

          upward: function() {
            $module.addClass(className.upward);
          }
        },

        remove: {
          initialLoad: function() {
            initialLoad = false;
          },

          fixed: function() {
            $body
              .removeClass(className.fixed)
            ;
          },

          positionTop: function() {
            $body.css('top', '');
          },

          data: function() {
            $module.removeData(moduleNamespace);
          },

          modal: function() {
            $module
              .removeClass(className.modal)
            ;
          },

          upward: function() {
            $module.removeClass(className.upward);
          },

          origin: {
            tabIndex: function() {
              $module
                .find(selector.origin.select)
                .attr('tabindex', '')
              ;
            },

            hidden: function() {
              $module
                .find(selector.origin.select)
                .removeClass(className.hidden)
              ;
            }
          },

          pseudo: {
            select: function() {
              $module.find(selector.pseudo.select).remove();
            }
          }
        },

        focus: {
          pseudo: {
            selected: function() {
              $module
                .find(selector.pseudo.selected)
                .focus()
              ;
            },

            selectedItem: function() {
              var value = module.get.value();

              $module
                .find(selector.pseudo.item + '[data-' + metadata.value + '=' + value + ']')
                .focus()
              ;
            },

            nextItem: function() {
              var
                $options = $module.find(selector.pseudo.option),
                index    = module.get.focused.index()
              ;

              $options
                .eq(index + 1)
                .children(selector.pseudo.item)
                .focus()
              ;
            },

            prevItem: function() {
              var
                $options = $module.find(selector.pseudo.option),
                index    = module.get.focused.index()
              ;

              if(index - 1 >= 0) {
                $options
                  .eq(index - 1)
                  .children(selector.pseudo.item)
                  .focus()
                ;
              }
            }
          }
        },

        select: {
          pseudo: {
            nextItem: function() {
              var
                $options = $module.find(selector.pseudo.option),
                index = module.get.selected.index()
              ;

              if($options.eq(index + 1).length) {
                var target = $options.eq(index + 1).children(selector.pseudo.item).get(0);

                module.change(target);
              }
            },

            prevItem: function() {
              var
                $options = $module.find(selector.pseudo.option),
                index    = module.get.selected.index()
              ;

              if(index - 1 >= 0) {
                var target = $options.eq(index - 1).children(selector.pseudo.item).get(0);

                module.change(target);
              }
            }
          }
        },

        bind: {
          events: function() {
            $document
              .on('click' + eventNamespace, module.event.click.document)
            ;

            $module
              .on('click',   selector.origin.select,   module.event.click.origin.select)
              .on('keydown', selector.origin.select,   module.event.keydown.origin.select)
              .on('change',  selector.origin.select,   module.event.change.origin.select)

              .on('click',   selector.pseudo.selected, module.event.click.pseudo.selected)
              .on('click',   selector.pseudo.item,     module.event.click.pseudo.item)
              .on('keydown', selector.pseudo.selected, module.event.keydown.pseudo.selected)
              .on('keydown', selector.pseudo.item,     module.event.keydown.pseudo.item)
            ;

            if(settings.useModal) {
              $module
                .on('click', selector.pseudo.modal,   module.event.click.pseudo.modal)
              ;
            }
          }
        },

        unbind: {
          events: function() {
            $document
              .off('click' + eventNamespace)
            ;

            $module
              .off('click',   selector.origin.select)
              .off('click',   selector.pseudo.selected)
              .off('click',   selector.pseudo.item)
              .off('keydown', selector.pseudo.selected)
              .off('keydown', selector.pseudo.item)
            ;

            if(settings.useModal) {
              $module
                .off('click', selector.pseudo.modal)
              ;
            }
          }
        },

        event: {
          click: {
            document: function(event) {
              var
                $target    = $(event.target),
                inModule   = $target.closest($module).length > 0,
                isActive   = module.is.active(),
                isIgnore 
                  =  $target.is(settings.ignoreTarget)
                  || $target.closest(settings.ignoreTarget).length
              ;
             
              if(!isIgnore && !inModule && isActive) {
                module.inactive();
              }
            },

            origin: {
              select: function() {
                var
                  isIE     = module.is.ie(),
                  isActive = module.is.active()
                ;
                
                if(!isIE) {
                  isActive
                    ? module.inactive()
                    : module.active()
                  ;
                }
              }
            },

            pseudo: {
              selected: function() {
                var isActive = module.is.active();

                isActive
                  ? module.inactive()
                  : module.active()
                ;
              },

              item: function(event) {
                var target = event.currentTarget;

                module.change(target);
                module.inactive();
              },

              modal: function(event) {
                var
                  isActive = module.is.active(),
                  isSelected = $(event.target).closest(selector.pseudo.selected).length
                ;
                
                if(!isSelected && isActive) {
                  module.inactive();
                }
              }
            }
          },

          keydown: {
            origin: {
              select: function(event) {
                var
                  isIE     = module.is.ie(),
                  isActive = module.is.active(),
                  key      = event.which,
                  keyCode  = {
                    enter  : 13,
                    space  : 32,
                  }
                ;

                switch(true) {
                  case !event.ctrlKey && key == keyCode.enter:
                    if(!isIE) {
                      isActive
                        ? module.inactive()
                        : module.active()
                      ;
                    }
                    else {
                      module.inactive();
                    }
                    break;

                  case !event.ctrlKey && key == keyCode.space:
                    module.active();
                    break;
                }
              }
            },

            pseudo: {
              selected: function(event) {
                var
                  key      = event.which,
                  keyCode  = {
                    enter  : 13,
                    left   : 37,
                    up     : 38,
                    right  : 39,
                    down   : 40
                  }
                ;

                if(key === keyCode.left || key === keyCode.up) {
                  module.select.pseudo.prevItem();
                  event.preventDefault();
                }
                else if(key === keyCode.right || key === keyCode.down) {
                  module.select.pseudo.nextItem();
                  event.preventDefault();
                }
              },

              item: function(event) {
                var
                  key      = event.which,
                  keyCode  = {
                    enter  : 13,
                    left   : 37,
                    up     : 38,
                    right  : 39,
                    down   : 40
                  }
                ;

                if(key === keyCode.left || key === keyCode.up) {
                  module.focus.pseudo.prevItem();
                  event.preventDefault();
                }
                else if(key === keyCode.right || key === keyCode.down) {
                  module.focus.pseudo.nextItem();
                  event.preventDefault();
                }
                else if(key === keyCode.enter) {                 
                  var target = event.currentTarget;
                  module.change(target);
                  module.focus.pseudo.selected();
                }
              }
            }
          },

          change: {
            origin: {
              select: function() {
                if(settings.usePseudo) {
                  module.set.pseudo.selected();
                  module.set.pseudo.selectedItem();
                }
                settings.onChange();
              }
            }
          }
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

RootUI.prototype.select.settings = {
  name          : 'select',
  namespace     : 'select',

  metadata      : {
    value       : 'value',
    label       : 'label',
    select      : 'select',
    selected    : 'selected',
    method      : 'method',
    browser     : 'browser-name'
  },

  selector      : {
    origin      : {
      select    : 'select',
      optgroup  : 'optgroup',
      option    : 'option',
      selected  : ':selected',
    },

    pseudo      : {
      select    : '.pseudo-select',
      selected  : '.pseudo-selected',
      optgroup  : '.pseudo-optgroup',
      label     : '.pseudo-label',
      option    : '.pseudo-option',
      list      : '.pseudo-list',
      item      : '.pseudo-item'
    },
  },
  
  className     : {
    modal       : 'select-modal',
    active      : 'is-active',
    hidden      : 'is-hidden',
    selected    : 'is-selected',
    fixed       : 'is-fixed',
    upward      : 'is-upward',

    pseudo      : {
      select    : 'pseudo-select',
      selected  : 'pseudo-selected',
      optgroup  : 'pseudo-optgroup',
      label     : 'pseudo-label',
      option    : 'pseudo-option',
      list      : 'pseudo-list',
      item      : 'pseudo-item',
      modal     : 'pseudo-modal'
    }
  },

  value         : {
    ie          : 'IE'
  },

  tag           : {
    select      : '<div></div>',
    selected    : '<button type="button"></button>',
    list        : '<div><ul></ul></div>',
    optgroup    : '<li><ul></ul></li>',
    label       : '<span></span>',
    option      : '<li></li>',
    item        : '<button type="button"></button>',
  },

  usePseudo     : true,
  useModal      : false,
  scrollLock    : true,
  selectedValue : false,
  ignoreTarget  : false,

  onLoad        : function() {},
  onActive      : function() {},
  onInactive    : function() {},
  onChange      : function() {}
};

RootUI.prototype.tab = function() {
  var
    $allModules    = $(arguments[0]),
    $window        = $(window),

    query          = arguments[1],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.tab.settings, query)
          : $.extend({}, RootUI.prototype.tab.settings),

        selector        = settings.selector,
        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,

        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,

        $module         = $(this),
        $navigation,
        $items,
        $contents,
        $currentItem,
        $currentContent,

        instance        = $module.data(moduleNamespace),
        element         = this,

        elementEventNamespace,
        id,
    
        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.instantiate();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          module.set.navigation();
          module.set.items();
          module.set.contents();
          module.set.id();

          var
            path    = settings.path,
            history = settings.history
          ;
         
          if(path) {
            if(history) module.set.location(path);
          }
          else {
            if(history) {
              var hash = module.get.hash();
              if(hash) path = hash;
            }
          }
          
          module.default(path);
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        current: function(path) {
          module.set.currentItem(path);
          module.set.currentContent(path);
        },

        open: function() {
          module.active.item();
          module.active.content();
        },

        close: function() {
          module.inactive.item();
          module.inactive.content();
        },

        default: function(path) {
          if(settings.history) {
            var hasChildPath = $module.find(selector.item + '[data-' + metadata.tab + '="' + path + '"]').length > 0;
            
            if(hasChildPath) {
              var pathArray = module.utilities.pathToArray(path);
    
              $.each(pathArray, function(index) {
                var
                  currentPathArray = pathArray.slice(0, index + 1),
                  currentPath      = module.utilities.arrayToPath(currentPathArray),
                  hasCurrentPath   = $navigation.find(selector.item + '[data-' + metadata.tab + '="' + currentPath + '"]').length > 0
                ;
    
                if(hasCurrentPath) {
                  path = currentPath;
                  return false;
                }
              });
            }
          }

          module.current(path);
          module.open();
        },

        change: function(path, methodValue) {
          module.close();
          
          methodValue === undefined
            ? module.default(path)
            : module.default(methodValue)
          ;

          settings.onChange.call(element);
        },

        destroy: function() {
          module.close();
          module.unbind.events();
          $module.removeData(moduleNamespace);
        },

        active: {
          item: function() {
            $currentItem.addClass(className.active);
          },

          content: function() {
            $currentContent.addClass(className.active);
          }
        },

        inactive: {
          item: function() {
            $currentItem.removeClass(className.active);
          },

          content: function() {
            $currentContent.removeClass(className.active);
          }
        },

        get: {
          hash: function() {
            return window.location.hash.slice(2);
          },

          activePath: function() {
            return $items.filter(selector.active).data(metadata.tab);
          }
        },

        set: {
          navigation: function() {
            $navigation = $module.find(selector.nav).first();
          },

          items: function() {
            $items = $navigation.find(selector.item);
          },

          contents: function() {
            $contents = $module.find(selector.content);
          },

          currentItem: function(path) {
            var $item = $items.filter('[data-' + metadata.tab + '="' + path + '"]');

            $item.length
              ? $currentItem = $item
              : $currentItem = $items.first()
            ;
          },
          
          currentContent: function(path) {
            var $content = $contents.filter('[data-' + metadata.tab + '="' + path + '"]');

            $content.length
              ? $currentContent = $content
              : $currentContent = $contents.first()
            ;
          },

          location: function(path) {
            window.location.hash = settings.pathDivider + path;
          },

          id: function() {
            id = (Math.random().toString(16) + '000000000').substr(2, 8);
            elementEventNamespace = '.' + id;
          }
        },

        remove: {
          data: function() {
            $module.removeData(moduleNamespace);
          },
        },

        utilities: {
          pathToArray: function(path) {
            return typeof path == 'string'
              ? path.split(settings.pathDivider)
              : [path]
            ;
          },

          arrayToPath: function(path) {
            return $.isArray(path)
              ? path.join(settings.pathDivider)
              : false
            ;
          }
        },

        bind: {
          events: function() {
            if(settings.history) {
              $window
                .on('hashchange' + elementEventNamespace, module.event.hashchange)
              ;
            }

            $items
              .on('click', module.event.click.item)
            ;
          }
        },

        unbind: {
          events: function() {
            $window
              .off(elementEventNamespace)
            ;

            $items
              .off('click')
            ;
          }
        },

        event: {
          hashchange: function() {
            if(settings.history) {
              var
                hash = module.get.hash(),
                hasChild = $module.find('[data-' + metadata.tab + '="' + hash + '"]').length,
                hasParent = $module.closest('[data-' + metadata.tab + '="' + hash + '"]').length
              ;

              if(hasChild || hasParent) module.change(hash);
            }
          },

          click: {
            item: function(event) {
              var path = $(this).data(metadata.tab);

              settings.history
                ? module.set.location(path)
                : module.change(path)
              ;

              event.preventDefault();
            }
          }
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
}

RootUI.prototype.tab.settings = {
  name         : 'Tab',
  namespace    : 'tab',

  metadata     : {
    tab        : 'tab',
  },

  selector     : {
    tab        : '.tab',
    nav        : '.tab-nav',
    item       : '.tab-item',
    content    : '.tab-content',
    active     : '.is-active'
  },
  
  className    : {
    active     : 'is-active'
  },

  history      : false,
  path         : false,
  pathDivider  : '/',

  onChange     : function() {}
};


/* ROOT UI circular는 propeller.js 코드의 일부를 사용하여 제작되었습니다. */

/*!
 *                          . .
 *                          | |            o
 *      ;-. ;-. ,-. ;-. ,-. | | ,-. ;-.    , ,-.
 *      | | |   | | | | |-' | | |-' |      | `-.
 *      |-' '   `-' |-' `-' ' ' `-' '   o  | `-'
 *      '           '                     -'
 *
 *      http://pixelscommander.com/polygon/propeller/example/
 *      jQuery plugin to rotate HTML elements by mouse. With inertia or without it.
 *
 *      Copyright (c) 2014 Denis Radin
 *      Licensed under the MIT license.
 *
 *      Title generated using "speed" http://patorjk.com/software/taag/#p=display&f=Shimrod&t=propeller.js
 *      Inspired by Brian Gonzalez
 */

RootUI.prototype.circular = function() {
  var
    $allModules    = $(arguments[0]),
    $window        = $(window),
    $body          = $('body'),

    query          = arguments[1],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.circular.settings, query)
          : $.extend({}, RootUI.prototype.circular.settings),

        selector        = settings.selector,
        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        
        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,
        
        $module         = $(this),
        element         = this,
        instance        = $module.data(moduleNamespace),

        $list           = $module.find(selector.list),
        $items          = $module.find(selector.item),
        $dot            = $module.find(selector.dot),

        active          = false,
        openAnimating   = false,
        hasMinMaxRotate = false,
        throwing        = false,

        radToDegMulti   = 57.29577951308232,
        angle           = 0,
        virtualAngle    = 0,
        realAngle       = 0,
        mouseDifference = 0,
        speed           = 0,
        target          = 0,
        turn            = 0,
        
        lastMouseAngle,
        lastElementAngle,
        lastMouseEvent,
        actualTime,
        animateStartTime,
        animateStartAngle,

        elementEventNamespace,
        id,
        raf,
        timer,
        
        itemsLength,
        openAnimation,
        initAngle,
        visibleItem,
        snap,
        maxRotation,
        minRotation,
        velocity,
        minSpeed,
        inertia,
        duration,
        threshold,
        correctAngle,

        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.instantiate();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          module.set.initOption();
          module.set.itemsPosition();
          module.set.id();
          
          if(openAnimation == false) {
            module.set.initAngle();
          }
          
          if(visibleItem) {
            module.set.itemsOpacity();
          }

          hasMinMaxRotate = module.has.minMaxRotate();
        },

        destroy: function() {
          module.unbind.events();
          module.remove.raf();
          module.remove.timer();
          module.set.close();
          $items.css('opacity', '');
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        open: function() {
          if(openAnimation) {
            openAnimating = true;

            if(snap == false) {
              snap = 360 / itemsLength;
            }

            if(hasMinMaxRotate) {
              target = maxRotation;
            }
            else {
              target = initAngle;
            }
            
            angle  = virtualAngle = target + 180;
            animateStartTime  = new Date;
            animateStartAngle = angle;

            module.throw();
            module.set.timer();
          }
          
          module.set.open();
          settings.onOpen.call(element);
        },

        close: function() {
          module.remove.raf();
          module.remove.timer();
          module.set.close();

          settings.onClose.call(element);
        },

        drag: function() {
          var oldDifference = mouseDifference;

          if(lastMouseEvent !== undefined && active) {
            module.updateAngleToMouse();
          }

          module.updateAngle();
          module.set.rotate();
          module.set.raf(module.drag);

          if(Math.abs(mouseDifference - oldDifference)) {
            settings.onDragging.call(element);
          }
        },

        throw: function() {
          throwing = true;

          if(snap) {
            actualTime = +new Date;
          }
          else {
            module.applySpeed();
            module.applyInertia();
          }

          module.updateAngle();
          module.set.rotate();
          module.set.raf(module.throw);

          if(hasMinMaxRotate) {
            if(snap == false && (angle <= minRotation || angle >= maxRotation)) {
              module.clear();

              if(angle < minRotation) {
                angle = minRotation;
              }
              else if(angle > maxRotation) {
                angle = maxRotation;
              }
              module.set.rotate();
              
              return false;
            }
          }

          settings.onThrowing.call(element);
          
          if(snap == false) {
            if(Math.abs(speed) < minSpeed) {
              module.clear();
            }
          }
        },

        updateAngleToMouse: function() {
          var
            rect = element.getBoundingClientRect(),
            center = {
              x: rect.left + (rect.width  / 2),
              y: rect.top  + (rect.height / 2)
            },

            newMouseAngle = Math.atan2(lastMouseEvent.y - center.y, lastMouseEvent.x - center.x) + Math.PI,
            mouseDegrees = newMouseAngle * radToDegMulti
          ;

          if(lastMouseAngle === undefined) {
            lastElementAngle = virtualAngle;
            lastMouseAngle   = mouseDegrees;
          }

          var oldAngle    = virtualAngle;
          mouseDifference = mouseDegrees - lastMouseAngle;
          virtualAngle    = lastElementAngle + mouseDifference;
          var newAngle    = virtualAngle;

          if(hasMinMaxRotate) {
            var
              _oldAngle = module.get.normalizeAngle(oldAngle),
              _newAngle = module.get.normalizeAngle(newAngle)
            ;

            if(_newAngle - _oldAngle > 100) {
              turn -= 1;
            }
            else if(_newAngle - _oldAngle < -100) {
              turn += 1;
            }
          }

          speed = module.get.differenceBetweenAngles(newAngle, oldAngle);
        },

        updateAngle: function() {
          if(active || snap == false) {
            angle = module.get.normalizeAngle(virtualAngle);

            if(hasMinMaxRotate) {
              realAngle = angle + (360 * turn);
              angle     = realAngle;

              if(angle > maxRotation + threshold) {
                angle = maxRotation + threshold;
              }
              else if(angle < minRotation - threshold) {
                angle = minRotation - threshold;
              }
            }
          }
          else {
            angle = module.set.easing(
              0,
              actualTime - animateStartTime,
              animateStartAngle,
              target - animateStartAngle,
              duration
            );

            if(angle < 0.001 && angle > -0.001) {
              angle = virtualAngle = 0;
            }
            else {
              virtualAngle = angle;
            }
          }
          
          if(visibleItem) module.set.itemsOpacity();
        },

        applySpeed: function() {
          if(inertia > 0 && speed !== 0 && active == false) {
            virtualAngle += speed / 5 * velocity;
          }
        },

        applyInertia: function() {
          if(inertia > 0) {
            speed = speed * inertia;
          }
        },

        clear: function() {
          module.set.clear();
          settings.onStop.call(element);
        },

        each: {
          
        },

        create: {
          
        },

        is: {
          open: function() {
            return $module.hasClass(className.open);
          },

          overAngle: function() {
            return angle > maxRotation || angle < minRotation;
          }
        },

        has: {
          minMaxRotate: function() {
            return minRotation + maxRotation > 0 && minRotation >= 0 && maxRotation >= 0;
          }
        },

        should: {

        },

        get: {
          itemsLength: function() {
            return $module.find(selector.item).length;
          },

          differenceBetweenAngles: function(newAngle, oldAngle) {
            var
              a1 = newAngle * (Math.PI / 180),
              a2 = oldAngle * (Math.PI / 180),
              radians = Math.atan2(Math.sin(a1 - a2), Math.cos(a1 - a2)),
              degrees = radians * (180 / Math.PI)
            ;
            
            return Math.round(degrees * 100 / 100);
          },

          normalizeAngle: function(angle) {
            var result = angle;
            result = result % 360;
            if(result < 0) {
              result = 360 + result;
            }

            return result;
          }
        },

        set: {
          initOption: function() {
            itemsLength = settings.itemsLength === 'auto'
              ? module.get.itemsLength()
              : settings.itemsLength
            ;

            openAnimation = settings.openAnimation
              ? settings.openAnimation
              : false
            ;

            visibleItem =
              settings.visibleItem === 'auto'
              || settings.visibleItem == false
              || settings.visibleItem <= 0
                ? false
                : settings.visibleItem
            ;

            snap = settings.snap
              ? settings.snap
              : 0
            ;

            maxRotation = settings.maxRotation
              ? settings.maxRotation
              : 0
            ;

            minRotation = settings.minRotation
              ? settings.minRotation
              : 0
            ;

            initAngle = settings.initAngle === 'auto'
              ? maxRotation
              : settings.initAngle
            ;

            correctAngle = settings.correctAngle
              ? settings.correctAngle
              : 0
            ;

            velocity = settings.velocity
              ? settings.velocity
              : 1
            ;

            minSpeed = settings.minSpeed
              ? settings.minSpeed
              : .001
            ;

            inertia = settings.inertia
              ? settings.inertia
              : 0
            ;

            duration = settings.duration
              ? settings.duration
              : 1000
            ;

            threshold = settings.threshold !== false
              ? settings.threshold
              : 10
            ;
          },

          initDrag: function() {
            speed            = 0;
            lastMouseAngle   = undefined;
            lastElementAngle = undefined;
            lastMouseEvent   = undefined;
          },

          initAngle: function() {
            angle = initAngle;
            module.set.rotate();
          },

          itemsPosition: function() {
            var
              radius = $list.innerWidth() / 2 - $items.outerWidth() / 2,
              theta  = 2 * Math.PI / itemsLength
            ;

            $items.each(function(index) {
              var
                xPosition,
                yPosition,
                currentAngle = (index + correctAngle / (360 / itemsLength)) * theta
              ;

              xPosition = Math.round(radius * Math.cos(currentAngle));
              yPosition = Math.round(radius * Math.sin(currentAngle));


              $(this).css({
                'top'  : yPosition,
                'left' : xPosition
              });
            });
          },

          itemsOpacity: function() {
            var
              startAngle   = maxRotation || initAngle,
              normalAngle = angle.toFixed(1) - startAngle,
              _snap       = snap ? snap : 360 / itemsLength
            ;

            $items.each(function(index) {
              var
                degree  = normalAngle + _snap * index,
                opacity
              ;

              if(degree + _snap > 360) degree -= 360;

              if(degree < 0) {
                opacity = Math.max(0, Math.min(1, 1.3 - Math.abs(degree) / _snap));
                $(this).css('opacity', opacity);
              }
              else if(degree > (visibleItem - 1) * _snap) {
                opacity = Math.max(0, Math.min(1, 1.3 - Math.abs((visibleItem - 1) - degree / _snap)));
                $(this).css('opacity', opacity);
              }
              else {
                $(this).css('opacity', 1);
              }

              if(openAnimating && index > visibleItem) {
                $(this).css('opacity', 0);
              }
            });
          },

          open: function() {
            $module.addClass(className.open);
          },
  
          close: function() {
            $module.removeClass(className.open);
          },

          clear: function() {
            if(settings.snap == false) {
              snap = settings.snap;
            }
  
            throwing = false;
            mouseDifference = 0;
            module.remove.raf();
          },

          target: function() {
            target = Math.round(angle / snap) * snap + Math.round(speed * 5 * velocity / snap) * snap;

            if(hasMinMaxRotate) {
              if(target > maxRotation) {
                target = maxRotation
              }
              else if(target < minRotation) {
                target = minRotation;
              }
            }
          },

          easing: function(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          },

          raf: function(method) {
            raf = window.requestAnimationFrame(method);
          },

          timer: function() {
            timer = setTimeout(function() {
              module.clear();
            }, duration);
          },

          rotate: function() {
            $list.css('transform',  'rotate(' +  angle + 'deg)');
            $items.css('transform', 'rotate(' + -angle + 'deg)');
          },

          id: function() {
            id = (Math.random().toString(16) + '000000000').substr(2, 8);
            elementEventNamespace = '.' + id;
          }
        },

        remove: {
          raf: function() {
            window.cancelAnimationFrame(raf);
          },

          timer: function() {
            clearTimeout(timer);
          },
        },

        bind: {
          events: function() {
            if('ontouchstart' in document.documentElement) {
              $list
                .on('touchstart',  module.event.onRotationStart)
              ;

              $window
                .on('touchmove',   module.event.onRotated)
                .on('touchend',    module.event.onRotationStop)
              ;
            }
            else {
              $list
                .on('mousedown',   module.event.onRotationStart)
              ;

              $window
                .on('mousemove',   module.event.onRotated)
                .on('mouseup',     module.event.onRotationStop)
              ;
            }

            $dot
              .on('click', module.event.click.dot)
            ;
          }
        },

        unbind: {
          events: function() {
            if('ontouchstart' in document.documentElement) {
              $list
                .off('touchstart')
              ;

              $window
                .off('touchmove')
                .off('touchend')
              ;
            }
            else {
              $list
                .off('mousedown')
              ;

              $window
                .off('mousemove')
                .off('mouseup')
              ;
            }

            $dot
              .off('click')
            ;
          }
        },

        event: {
          click: {
            dot: function() {
              var isOpen = module.is.open();

              isOpen
                ? module.close()
                : module.open()
              ;
            }
          },

          onRotationStart: function() {
            if(throwing == true) {
              module.set.clear(); 
            }
            else {
              mouseDifference = 0;
            }

            active        = true;
            openAnimating = false;
            turn          = 0;
            virtualAngle  = angle;

            module.remove.timer();
            module.set.initDrag();
            module.set.raf(module.drag);
          },

          onRotated: function(event) {
            if(active === true) {
              event.stopPropagation();
              event.preventDefault();
  
              if(event.originalEvent.touches !== undefined) {
                var touchEvent = event.originalEvent.touches[0];

                lastMouseEvent = {
                  x: touchEvent.clientX,
                  y: touchEvent.clientY
                }
              }
              else {
                lastMouseEvent = {
                  x: event.clientX,
                  y: event.clientY
                }
              }
            }
          },

          onRotationStop: function() {
            if(active) {
              module.remove.raf();

              if(Math.abs(mouseDifference) || hasMinMaxRotate) {
                if(snap) {
                  animateStartTime  = new Date;
                  animateStartAngle = angle;
                  module.set.target();
                  module.set.timer();
                }

                if(snap || inertia) {
                  module.throw();
                }
              }
  
              active = false;
            }
          }
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

RootUI.prototype.circular.settings = {
  name          : 'Circular',
  namespace     : 'circular',

  className     : {
    open        : 'is-open'
  },

  selector      : {
    dot         : '.circular-dot-item',
    list        : '.circular-list-outer',
    item        : '.circular-list-outer-item'
  },

  itemsLength   : 'auto',
  initAngle     : 'auto',
  openAnimation : 'auto',
  visibleItem   : 'auto',
  snap          : 0,
  maxRotation   : 0,
  minRotation   : 0,
  velocity      : 1,
  correctAngle  : 0,
  minSpeed      : .01,
  inertia       : .98,
  duration      : 1000,
  threshold     : 10,

  onOpen        : function() {},
  onClose       : function() {},
  onDragging    : function() {},
  onThrowing    : function() {},
  onStop        : function() {}
};

RootUI.prototype.checkResize = function() {
  var
    $allModules = $(arguments[0]),
    query       = arguments[1],
    $window     = $(window)
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.checkResize.settings, query)
          : $.extend({}, RootUI.prototype.checkResize.settings),

        selector       = settings.selector,
        className      = settings.className,
        attr           = settings.attr,
        namespace      = settings.namespace,
        eventNamespace = '.' + namespace,

        $module        = $(this),

        resizeTimer,
    
        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.bind.events();
        },

        setup: function() {
          
        },

        each: {
          
        },

        create: {
          
        },

        is: {
          resizing: function() {
            return $module.hasClass(className.resizing);
          }
        },

        get: {

        },

        set: {
          resize: function() {
            clearTimeout(resizeTimer);
            $module.addClass(className.resizing);
            resizeTimer = setTimeout(function() {
              $module.removeClass(className.resizing);
            }, settings.duration);
          }
        },

        bind: {
          events: function() {
            $window
              .on('resize', module.event.resize)
            ;
          }
        },

        event: {
          resize: function() {
            var isResizing = module.is.resizing();
            
            if(!isResizing) module.set.resize();
          },
        }
      }
      
      module.initialize();
    })
  ;

  return this;
};

RootUI.prototype.checkResize.settings = {
  name         : 'CheckResize',
  namespace    : 'checkResize',

  selector     : {
    
  },
  
  className    : {
    resizing   : 'is-resizing'
  },

  attr         : {
    dataGroup  : 'data-group',
    dataTarget : 'data-target',
    dataName   : 'data-name',
  },

  duration     : 250
};

/* ROOT UI userAgent는 UAParser.js 코드를 기반으로 제작되었습니다. */

/*!
 * UAParser.js v0.7.21
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

  'use strict';

  //////////////
  // Constants
  /////////////


  var LIBVERSION  = '0.7.21',
      EMPTY       = '',
      UNKNOWN     = '?',
      FUNC_TYPE   = 'function',
      UNDEF_TYPE  = 'undefined',
      OBJ_TYPE    = 'object',
      STR_TYPE    = 'string',
      MAJOR       = 'major', // deprecated
      MODEL       = 'model',
      NAME        = 'name',
      TYPE        = 'type',
      VENDOR      = 'vendor',
      VERSION     = 'version',
      ARCHITECTURE= 'architecture',
      CONSOLE     = 'console',
      MOBILE      = 'mobile',
      TABLET      = 'tablet',
      SMARTTV     = 'smarttv',
      WEARABLE    = 'wearable',
      EMBEDDED    = 'embedded';


  ///////////
  // Helper
  //////////


  var util = {
      extend : function (regexes, extensions) {
          var mergedRegexes = {};
          for (var i in regexes) {
              if (extensions[i] && extensions[i].length % 2 === 0) {
                  mergedRegexes[i] = extensions[i].concat(regexes[i]);
              } else {
                  mergedRegexes[i] = regexes[i];
              }
          }
          return mergedRegexes;
      },
      has : function (str1, str2) {
        if (typeof str1 === "string") {
          return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
        } else {
          return false;
        }
      },
      lowerize : function (str) {
          return str.toLowerCase();
      },
      major : function (version) {
          return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
      },
      trim : function (str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
  };


  ///////////////
  // Map helper
  //////////////


  var mapper = {

      rgx : function (ua, arrays) {

          var i = 0, j, k, p, q, matches, match;

          // loop through all regexes maps
          while (i < arrays.length && !matches) {

              var regex = arrays[i],       // even sequence (0,2,4,..)
                  props = arrays[i + 1];   // odd sequence (1,3,5,..)
              j = k = 0;

              // try matching uastring with regexes
              while (j < regex.length && !matches) {

                  matches = regex[j++].exec(ua);

                  if (!!matches) {
                      for (p = 0; p < props.length; p++) {
                          match = matches[++k];
                          q = props[p];
                          // check if given property is actually array
                          if (typeof q === OBJ_TYPE && q.length > 0) {
                              if (q.length == 2) {
                                  if (typeof q[1] == FUNC_TYPE) {
                                      // assign modified match
                                      this[q[0]] = q[1].call(this, match);
                                  } else {
                                      // assign given value, ignore regex match
                                      this[q[0]] = q[1];
                                  }
                              } else if (q.length == 3) {
                                  // check whether function or regex
                                  if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                      // call function (usually string mapper)
                                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                  } else {
                                      // sanitize match using given regex
                                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                  }
                              } else if (q.length == 4) {
                                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                              }
                          } else {
                              this[q] = match ? match : undefined;
                          }
                      }
                  }
              }
              i += 2;
          }
      },

      str : function (str, map) {

          for (var i in map) {
              // check if array
              if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                  for (var j = 0; j < map[i].length; j++) {
                      if (util.has(map[i][j], str)) {
                          return (i === UNKNOWN) ? undefined : i;
                      }
                  }
              } else if (util.has(map[i], str)) {
                  return (i === UNKNOWN) ? undefined : i;
              }
          }
          return str;
      }
  };


  ///////////////
  // String map
  //////////////


  var maps = {

      browser : {
          oldsafari : {
              version : {
                  '1.0'   : '/8',
                  '1.2'   : '/1',
                  '1.3'   : '/3',
                  '2.0'   : '/412',
                  '2.0.2' : '/416',
                  '2.0.3' : '/417',
                  '2.0.4' : '/419',
                  '?'     : '/'
              }
          }
      },

      device : {
          amazon : {
              model : {
                  'Fire Phone' : ['SD', 'KF']
              }
          },
          sprint : {
              model : {
                  'Evo Shift 4G' : '7373KT'
              },
              vendor : {
                  'HTC'       : 'APA',
                  'Sprint'    : 'Sprint'
              }
          }
      },

      os : {
          windows : {
              version : {
                  'ME'        : '4.90',
                  'NT 3.11'   : 'NT3.51',
                  'NT 4.0'    : 'NT4.0',
                  '2000'      : 'NT 5.0',
                  'XP'        : ['NT 5.1', 'NT 5.2'],
                  'Vista'     : 'NT 6.0',
                  '7'         : 'NT 6.1',
                  '8'         : 'NT 6.2',
                  '8.1'       : 'NT 6.3',
                  '10'        : ['NT 6.4', 'NT 10.0'],
                  'RT'        : 'ARM'
              }
          }
      }
  };


  //////////////
  // Regex map
  /////////////


  var regexes = {

      browser : [[

          // Presto based
          /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
          /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
          /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
          /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
          ], [NAME, VERSION], [

          /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
          ], [[NAME, 'Opera Mini'], VERSION], [

          /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
          ], [[NAME, 'Opera'], VERSION], [

          // Mixed
          /(kindle)\/([\w\.]+)/i,                                             // Kindle
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                                                              // Lunascape/Maxthon/Netfront/Jasmine/Blazer
          // Trident based
          /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                              // Avant/IEMobile/SlimBrowser
          /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,                      // Baidu Browser
          /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

          // Webkit/KHTML based
          /(rekonq)\/([\w\.]*)/i,                                             // Rekonq
          /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                                                                              // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
          ], [NAME, VERSION], [

          /(konqueror)\/([\w\.]+)/i                                           // Konqueror
          ], [[NAME, 'Konqueror'], VERSION], [

          /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
          ], [[NAME, 'IE'], VERSION], [

          /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i                          // Microsoft Edge
          ], [[NAME, 'Edge'], VERSION], [

          /(yabrowser)\/([\w\.]+)/i                                           // Yandex
          ], [[NAME, 'Yandex'], VERSION], [

          /(Avast)\/([\w\.]+)/i                                               // Avast Secure Browser
          ], [[NAME, 'Avast Secure Browser'], VERSION], [

          /(AVG)\/([\w\.]+)/i                                                 // AVG Secure Browser
          ], [[NAME, 'AVG Secure Browser'], VERSION], [

          /(puffin)\/([\w\.]+)/i                                              // Puffin
          ], [[NAME, 'Puffin'], VERSION], [

          /(focus)\/([\w\.]+)/i                                               // Firefox Focus
          ], [[NAME, 'Firefox Focus'], VERSION], [

          /(opt)\/([\w\.]+)/i                                                 // Opera Touch
          ], [[NAME, 'Opera Touch'], VERSION], [

          /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i         // UCBrowser
          ], [[NAME, 'UCBrowser'], VERSION], [

          /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
          ], [[NAME, /_/g, ' '], VERSION], [

          /(windowswechat qbcore)\/([\w\.]+)/i                                // WeChat Desktop for Windows Built-in Browser
          ], [[NAME, 'WeChat(Win) Desktop'], VERSION], [

          /(micromessenger)\/([\w\.]+)/i                                      // WeChat
          ], [[NAME, 'WeChat'], VERSION], [

          /(brave)\/([\w\.]+)/i                                               // Brave browser
          ], [[NAME, 'Brave'], VERSION], [

          /(whale)\/([\w\.]+)/i                                               // Whale browser
          ], [[NAME, 'Whale'], VERSION], [

          /(qqbrowserlite)\/([\w\.]+)/i                                       // QQBrowserLite
          ], [NAME, VERSION], [

          /(QQ)\/([\d\.]+)/i                                                  // QQ, aka ShouQ
          ], [NAME, VERSION], [

          /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
          ], [NAME, VERSION], [

          /(baiduboxapp)[\/\s]?([\w\.]+)/i                                    // Baidu App
          ], [NAME, VERSION], [

          /(2345Explorer)[\/\s]?([\w\.]+)/i                                   // 2345 Browser
          ], [NAME, VERSION], [

          /(MetaSr)[\/\s]?([\w\.]+)/i                                         // SouGouBrowser
          ], [NAME], [

          /(LBBROWSER)/i                                                      // LieBao Browser
          ], [NAME], [

          /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
          ], [VERSION, [NAME, 'MIUI Browser']], [

          /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
          ], [VERSION, [NAME, 'Facebook']], [

          /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
          /android.+(line)\/([\w\.]+)\/iab/i                                  // Line App for Android
          ], [NAME, VERSION], [

          /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
          ], [VERSION, [NAME, 'Chrome Headless']], [

          /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
          ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

          /((?:oculus|samsung)browser)\/([\w\.]+)/i
          ], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [                // Oculus / Samsung Browser

          /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
          ], [VERSION, [NAME, 'Android Browser']], [

          /(sailfishbrowser)\/([\w\.]+)/i                                     // Sailfish Browser
          ], [[NAME, 'Sailfish Browser'], VERSION], [

          /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                              // Chrome/OmniWeb/Arora/Tizen/Nokia
          ], [NAME, VERSION], [

          /(dolfin)\/([\w\.]+)/i                                              // Dolphin
          ], [[NAME, 'Dolphin'], VERSION], [

          /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
          ], [[NAME, '360 Browser']], [

          /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
          ], [[NAME, 'Chrome'], VERSION], [

          /(coast)\/([\w\.]+)/i                                               // Opera Coast
          ], [[NAME, 'Opera Coast'], VERSION], [

          /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
          ], [VERSION, [NAME, 'Firefox']], [

          /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
          ], [VERSION, [NAME, 'Mobile Safari']], [

          /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
          ], [VERSION, NAME], [

          /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i  // Google Search Appliance on iOS
          ], [[NAME, 'GSA'], VERSION], [

          /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
          ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

          /(webkit|khtml)\/([\w\.]+)/i
          ], [NAME, VERSION], [

          // Gecko based
          /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
          ], [[NAME, 'Netscape'], VERSION], [
          /(swiftfox)/i,                                                      // Swiftfox
          /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                              // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                                                                              // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
          /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

          // Other
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                              // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
          /(links)\s\(([\w\.]+)/i,                                            // Links
          /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
          /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
          /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
          ], [NAME, VERSION]
      ],

      cpu : [[

          /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
          ], [[ARCHITECTURE, 'amd64']], [

          /(ia32(?=;))/i                                                      // IA32 (quicktime)
          ], [[ARCHITECTURE, util.lowerize]], [

          /((?:i[346]|x)86)[;\)]/i                                            // IA32
          ], [[ARCHITECTURE, 'ia32']], [

          // PocketPC mistakenly identified as PowerPC
          /windows\s(ce|mobile);\sppc;/i
          ], [[ARCHITECTURE, 'arm']], [

          /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
          ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

          /(sun4\w)[;\)]/i                                                    // SPARC
          ], [[ARCHITECTURE, 'sparc']], [

          /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                              // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ], [[ARCHITECTURE, util.lowerize]]
      ],

      device : [[

          /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i                        // iPad/PlayBook
          ], [MODEL, VENDOR, [TYPE, TABLET]], [

          /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
          ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

          /(apple\s{0,1}tv)/i                                                 // Apple TV
          ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple'], [TYPE, SMARTTV]], [

          /(archos)\s(gamepad2?)/i,                                           // Archos
          /(hp).+(touchpad)/i,                                                // HP TouchPad
          /(hp).+(tablet)/i,                                                  // HP Tablet
          /(kindle)\/([\w\.]+)/i,                                             // Kindle
          /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
          /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
          ], [VENDOR, MODEL, [TYPE, TABLET]], [

          /(kf[A-z]+)\sbuild\/.+silk\//i                                      // Kindle Fire HD
          ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
          /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i                         // Fire Phone
          ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
          /android.+aft([bms])\sbuild/i                                       // Fire TV
          ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [

          /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
          ], [MODEL, VENDOR, [TYPE, MOBILE]], [
          /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
          ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

          /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                              // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
          /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
          /(asus)-?(\w+)/i                                                    // Asus
          ], [VENDOR, MODEL, [TYPE, MOBILE]], [
          /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
          ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                              // Asus Tablets
          /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
          ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

          /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
          /(sony)?(?:sgp.+)\sbuild\//i
          ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
          /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [

          /\s(ouya)\s/i,                                                      // Ouya
          /(nintendo)\s([wids3u]+)/i                                          // Nintendo
          ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

          /android.+;\s(shield)\sbuild/i                                      // Nvidia
          ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

          /(playstation\s[34portablevi]+)/i                                   // Playstation
          ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

          /(sprint\s(\w+))/i                                                  // Sprint Phones
          ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

          /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,                        // HTC
          /(zte)-(\w*)/i,                                                     // ZTE
          /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                                                                              // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

          /(nexus\s9)/i                                                       // HTC Nexus 9
          ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

          /d\/huawei([\w\s-]+)[;\)]/i,
          /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i                              // Huawei
          ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

          /android.+(bah2?-a?[lw]\d{2})/i                                     // Huawei MediaPad
          ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [

          /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
          ], [VENDOR, MODEL, [TYPE, MOBILE]], [

          /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
          ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
          /(kin\.[onetw]{3})/i                                                // Microsoft Kin
          ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                              // Motorola
          /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
          /mot[\s-]?(\w*)/i,
          /(XT\d{3,4}) build\//i,
          /(nexus\s6)/i
          ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
          /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
          ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

          /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
          ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

          /hbbtv.+maple;(\d+)/i
          ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

          /\(dtv[\);].+(aquos)/i                                              // Sharp
          ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

          /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
          /((SM-T\w+))/i
          ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
          /smart-tv.+(samsung)/i
          ], [VENDOR, [TYPE, SMARTTV], MODEL], [
          /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
          /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
          /sec-((sgh\w+))/i
          ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

          /sie-(\w*)/i                                                        // Siemens
          ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

          /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
          /(nokia)[\s_-]?([\w-]*)/i
          ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

          /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i                   // Acer
          ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

          /android.+([vl]k\-?\d{3})\s+build/i                                 // LG Tablet
          ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
          /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
          ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
          /(lg) netcast\.tv/i                                                 // LG SmartTV
          ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
          /(nexus\s[45])/i,                                                   // LG
          /lg[e;\s\/-]+(\w*)/i,
          /android.+lg(\-?[\d\w]+)\s+build/i
          ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

          /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i             // Lenovo tablets
          ], [VENDOR, MODEL, [TYPE, TABLET]], [
          /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
          ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
          /(lenovo)[_\s-]?([\w-]+)/i
          ], [VENDOR, MODEL, [TYPE, MOBILE]], [

          /linux;.+((jolla));/i                                               // Jolla
          ], [VENDOR, MODEL, [TYPE, MOBILE]], [

          /((pebble))app\/[\d\.]+\s/i                                         // Pebble
          ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

          /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
          ], [VENDOR, MODEL, [TYPE, MOBILE]], [

          /crkey/i                                                            // Google Chromecast
          ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [

          /android.+;\s(glass)\s\d/i                                          // Google Glass
          ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

          /android.+;\s(pixel c)[\s)]/i                                       // Google Pixel C
          ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

          /android.+;\s(pixel( [23])?( xl)?)[\s)]/i                              // Google Pixel
          ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

          /android.+;\s(\w+)\s+build\/hm\1/i,                                 // Xiaomi Hongmi 'numeric' models
          /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
          /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,    
                                                                              // Xiaomi Mi
          /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i       // Redmi Phones
          ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
          /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i            // Mi Pad tablets
          ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [
          /android.+;\s(m[1-5]\snote)\sbuild/i                                // Meizu
          ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
          /(mz)-([\w-]{2,})/i
          ], [[VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]], [

          /android.+a000(1)\s+build/i,                                        // OnePlus
          /android.+oneplus\s(a\d{4})[\s)]/i
          ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

          /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i                            // RCA Tablets
          ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [

          /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i                      // Dell Venue Tablets
          ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [

          /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i                         // Verizon Tablet
          ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [

          /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i     // Barnes & Noble Tablet
          ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [

          /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i                           // Barnes & Noble Tablet
          ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [

          /android.+;\s(k88)\sbuild/i                                         // ZTE K Series Tablet
          ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [

          /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i                         // Swiss GEN Mobile
          ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [

          /android.+[;\/]\s*(zur\d{3})\s+build/i                              // Swiss ZUR Tablet
          ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [

          /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i                         // Zeki Tablets
          ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [

          /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
          /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i        // Dragon Touch Tablet
          ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [

          /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i                            // Insignia Tablets
          ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [

          /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i                    // NextBook Tablets
          ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [

          /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
          ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones

          /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i                     // LvTel Phones
          ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [

          /android.+;\s(PH-1)\s/i
          ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1

          /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i          // Envizen Tablets
          ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [

          /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i          // Le Pan Tablets
          ], [VENDOR, MODEL, [TYPE, TABLET]], [

          /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i                         // MachSpeed Tablets
          ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [

          /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i                // Trinity Tablets
          ], [VENDOR, MODEL, [TYPE, TABLET]], [

          /android.+[;\/]\s*TU_(1491)\s+build/i                               // Rotor Tablets
          ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [

          /android.+(KS(.+))\s+build/i                                        // Amazon Kindle Tablets
          ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [

          /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i                      // Gigaset Tablets
          ], [VENDOR, MODEL, [TYPE, TABLET]], [

          /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
          /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
          ], [[TYPE, util.lowerize], VENDOR, MODEL], [

          /[\s\/\(](smart-?tv)[;\)]/i                                         // SmartTV
          ], [[TYPE, SMARTTV]], [

          /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
          ], [MODEL, [VENDOR, 'Generic']]
      ],

      engine : [[

          /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
          ], [VERSION, [NAME, 'EdgeHTML']], [

          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
          ], [VERSION, [NAME, 'Blink']], [

          /(presto)\/([\w\.]+)/i,                                             // Presto
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,     
                                                                              // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
          /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
          /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
          ], [NAME, VERSION], [

          /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
          ], [VERSION, NAME]
      ],

      os : [[

          // Windows based
          /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
          ], [NAME, VERSION], [
          /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
          /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
          /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
          ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
          /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
          ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

          // Mobile/Embedded OS
          /\((bb)(10);/i                                                      // BlackBerry 10
          ], [[NAME, 'BlackBerry'], VERSION], [
          /(blackberry)\w*\/?([\w\.]*)/i,                                     // Blackberry
          /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
          /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                                                                              // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
          ], [NAME, VERSION], [
          /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i                  // Symbian
          ], [[NAME, 'Symbian'], VERSION], [
          /\((series40);/i                                                    // Series 40
          ], [NAME], [
          /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
          ], [[NAME, 'Firefox OS'], VERSION], [

          // Console
          /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

          // GNU/Linux based
          /(mint)[\/\s\(]?(\w*)/i,                                            // Mint
          /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
          /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                                                              // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                              // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
          /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
          /(gnu)\s?([\w\.]*)/i                                                // GNU
          ], [NAME, VERSION], [

          /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
          ], [[NAME, 'Chromium OS'], VERSION],[

          // Solaris
          /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
          ], [[NAME, 'Solaris'], VERSION], [

          // BSD based
          /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i                    // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
          ], [NAME, VERSION],[

          /(haiku)\s(\w+)/i                                                   // Haiku
          ], [NAME, VERSION],[

          /cfnetwork\/.+darwin/i,
          /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i             // iOS
          ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [

          /(mac\sos\sx)\s?([\w\s\.]*)/i,
          /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
          ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

          // Other
          /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
          /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
          /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                                                                              // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
          /(unix)\s?([\w\.]*)/i                                               // UNIX
          ], [NAME, VERSION]
      ]
  };


  /////////////////
  // Constructor
  ////////////////
  var UAParser = function (uastring, extensions) {

      if (typeof uastring === 'object') {
          extensions = uastring;
          uastring = undefined;
      }

      if (!(this instanceof UAParser)) {
          return new UAParser(uastring, extensions).getResult();
      }

      var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
      var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

      this.getBrowser = function () {
          var browser = { name: undefined, version: undefined };
          mapper.rgx.call(browser, ua, rgxmap.browser);
          browser.major = util.major(browser.version); // deprecated
          return browser;
      };
      this.getCPU = function () {
          var cpu = { architecture: undefined };
          mapper.rgx.call(cpu, ua, rgxmap.cpu);
          return cpu;
      };
      this.getDevice = function () {
          var device = { vendor: undefined, model: undefined, type: undefined };
          mapper.rgx.call(device, ua, rgxmap.device);
          return device;
      };
      this.getEngine = function () {
          var engine = { name: undefined, version: undefined };
          mapper.rgx.call(engine, ua, rgxmap.engine);
          return engine;
      };
      this.getOS = function () {
          var os = { name: undefined, version: undefined };
          mapper.rgx.call(os, ua, rgxmap.os);
          return os;
      };
      this.getResult = function () {
          return {
              ua      : this.getUA(),
              browser : this.getBrowser(),
              engine  : this.getEngine(),
              os      : this.getOS(),
              device  : this.getDevice(),
              cpu     : this.getCPU()
          };
      };
      this.getUA = function () {
          return ua;
      };
      this.setUA = function (uastring) {
          ua = uastring;
          return this;
      };
      return this;
  };

  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = {
      NAME    : NAME,
      MAJOR   : MAJOR, // deprecated
      VERSION : VERSION
  };
  UAParser.CPU = {
      ARCHITECTURE : ARCHITECTURE
  };
  UAParser.DEVICE = {
      MODEL   : MODEL,
      VENDOR  : VENDOR,
      TYPE    : TYPE,
      CONSOLE : CONSOLE,
      MOBILE  : MOBILE,
      SMARTTV : SMARTTV,
      TABLET  : TABLET,
      WEARABLE: WEARABLE,
      EMBEDDED: EMBEDDED
  };
  UAParser.ENGINE = {
      NAME    : NAME,
      VERSION : VERSION
  };
  UAParser.OS = {
      NAME    : NAME,
      VERSION : VERSION
  };

  ///////////
  // Export
  //////////


  // check js environment
  if (typeof(exports) !== UNDEF_TYPE) {
      // nodejs env
      if (typeof module !== UNDEF_TYPE && module.exports) {
          exports = module.exports = UAParser;
      }
      exports.UAParser = UAParser;
  } else {
      // requirejs env (optional)
      if (typeof(define) === 'function' && define.amd) {
          define(function () {
              return UAParser;
          });
      } else if (window) {
          // browser env
          window.UAParser = UAParser;
      }
  }

  // jQuery/Zepto specific (optional)
  // Note:
  //   In AMD env the global scope should be kept clean, but jQuery is an exception.
  //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
  //   and we should catch that.
  var $ = window && (window.jQuery || window.Zepto);
  if ($ && !$.ua) {
      var parser = new UAParser();
      $.ua = parser.getResult();
      $.ua.get = function () {
          return parser.getUA();
      };
      $.ua.set = function (uastring) {
          parser.setUA(uastring);
          var result = parser.getResult();
          for (var prop in result) {
              $.ua[prop] = result[prop];
          }
      };
  }

})(typeof window === 'object' ? window : this);

RootUI.prototype.userAgent = function() {
  var
    $allModules     = $(arguments[0]),
    
    query          = arguments[1],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue,

    parser          = new UAParser(),
    result          = parser.getResult(),
    browserName     = result.browser.name,
    browserVersion  = result.browser.major,
    deviceVender    = result.device.vendor,
    deviceModel     = result.device.model,
    deviceType      = result.device.type,
    osName          = result.os.name,
    osVersion       = result.os.version,
    engineName      = result.engine.name,
    engineVersion   = result.engine.version
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.userAgent.settings, query)
          : $.extend({}, RootUI.prototype.userAgent.settings),

        selector        = settings.selector,
        className       = settings.className,
        attr            = settings.attr,
        namespace       = settings.namespace,
        userAgent       = settings.userAgent,
        accessibility   = settings.accessibility,

        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,
        
        $module         = $(this),
        instance        = $module.data(moduleNamespace),
        element         = this,
    
        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.instantiate();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          var hasAgent = module.has.agent();
          if(hasAgent === undefined) module.set.agent();
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        each: {
          
        },

        create: {
          
        },

        is: {
          
        },

        has: {
          agent: function() {
            return $module.attr(attr.dataBrowserName);
          }
        },

        get: {
          browserName: function() {
            return browserName;
          },

          browserVersion: function() {
            return browserVersion || false;
          },

          deviceVender: function() {
            return deviceVender || false;
          },

          deviceModel: function() {
            return deviceModel || false;
          },

          deviceType: function() {
            return deviceType || false;
          },

          osName: function() {
            return osName || false;
          },

          osVersion: function() {
            return osVersion || false;
          },

          engineName: function() {
            return engineName || false;
          },

          engineVersion: function() {
            return engineVersion || false;
          }
        },

        set: {
          agent: function() {
            $module.attr({
              'data-browser-name'    : browserName,
              'data-browser-version' : browserVersion,
              'data-device-vendor'   : deviceVender,
              'data-device-model'    : deviceModel,
              'data-device-type'     : deviceType,
              'data-os-name'         : osName,
              'data-os-version'      : osVersion,
              'data-engine-name'     : engineName,
              'data-engine-version'  : engineVersion
            });
          },
        },

        bind: {
          events: function() {
            $module
              .on('click', module.event.click)
            ;
          }
        },

        event: {
          click: function() {
            
          },
        }
      }

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

RootUI.prototype.userAgent.settings = {
  name                  : 'UserAgent',
  namespace             : 'userAgent',

  selector              : {
    html                : 'html',
    body                : 'body',
  },
  
  className             : {
    resizing            : 'resizing'
  },

  attr                  : {
    dataGroup           : 'data-group',
    dataTarget          : 'data-target',
    dataName            : 'data-name',
    dataBrowserName     : 'data-browser-name',
    dataBrowserVersion  : 'data-browser-version',
    dataDeviceVendor    : 'data-device-vendor',
    dataDeviceModel     : 'data-device-model',
    dataDeviceType      : 'data-device-type',
    dataOsName          : 'data-os-name',
    dataOsVersion       : 'data-os-version',
    dataEngine          : 'data-engine'
  },
};

RootUI.prototype.usingType = function() {
  var
    $allModules = $(arguments[0]),
    query       = arguments[1],
    $document   = $(document)
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.usingType.settings, query)
          : $.extend({}, RootUI.prototype.usingType.settings),

        selector       = settings.selector,
        className      = settings.className,
        attr           = settings.attr,
        namespace      = settings.namespace,
        eventNamespace = '.' + namespace,

        $module        = $(this),
    
        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.bind.events();
        },

        setup: function() {
          module.set.usingMouse();
        },

        each: {

        },

        create: {
        
        },

        is: {
          usingTab: function() {
            return $module.hasClass(className.usingTab);
          },

          usingMouse: function() {
            return $module.hasClass(className.usingMouse);
          }
        },

        get: {

        },

        set: {
          usingTab: function() {
            $module.removeClass(className.usingMouse).addClass(className.usingTab);
          },

          usingMouse: function() {
            $module.removeClass(className.usingTab).addClass(className.usingMouse);
          },
        },

        bind: {
          events: function() {
            $document
              .on('mousedown', module.event.mousedown)
              .on('keydown', module.event.keydown)
            ;
          }
        },

        event: {
          mousedown: function() {
            module.is.usingTab() && module.set.usingMouse();
          },

          keydown: function(e) {
            module.is.usingMouse() && (e.keyCode == 9 && module.set.usingTab());
          }
        }
      }
      
      module.initialize();
    })
  ;

  return this;
};

RootUI.prototype.usingType.settings = {
  name         : 'UsingType',
  namespace    : 'usingType',

  selector     : {
    
  },
  
  className    : {
    usingTab   : 'using-tab',
    usingMouse : 'using-mouse'
  },

  attr         : {
    dataGroup  : 'data-group',
    dataTarget : 'data-target',
    dataName   : 'data-name',
  }
};

RootUI.prototype.viewport = function() {
  var
    $allModules = $(arguments[0]),
    query       = arguments[1],
    $window     = $(window)
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.viewport.settings, query)
          : $.extend({}, RootUI.prototype.viewport.settings),

        selector       = settings.selector,
        className      = settings.className,
        attr           = settings.attr,
        namespace      = settings.namespace,
        eventNamespace = '.' + namespace,

        $html          = $(selector.html),
        $module        = $(this),
    
        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.bind.events();
        },

        setup: function() {
          settings.vh && module.set.viewportHeight();
        },

        each: {
          
        },

        create: {
          
        },

        is: {

        },

        get: {

        },

        set: {
          viewportHeight: function() {
            document.documentElement.style.setProperty(attr.vh, $window.innerHeight() / 100 + 'px');
          }
        },

        bind: {
          events: function() {
            $window
              .on('resize', module.event.resize)
            ;

            $module
              .on('click', module.event.click)
            ;
          }
        },

        event: {
          resize: function() {
            module.set.viewportHeight();
          },

          click: function() {
            
          }
        }
      }
      
      module.initialize();
    })
  ;

  return this;
};

RootUI.prototype.viewport.settings = {
  name         : 'Viewport',
  namespace    : 'viewport',

  selector     : {
    html       : 'html'
  },
  
  className    : {
    
  },

  attr         : {
    dataGroup  : 'data-group',
    dataTarget : 'data-target',
    dataName   : 'data-name',
    vh         : '--vh'
  },

  vh           : true
};

RootUI.prototype.scrollLock = function() {
  var
    $allModules    = $(arguments[0]),
    query          = arguments[1],
    
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.scrollLock.settings, query)
          : $.extend({}, RootUI.prototype.scrollLock.settings),

        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,

        $module         = $(this),
        instance        = $module.data(moduleNamespace),
        element         = this,

        startY          = 0,
        scrollEventKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40],
        pos             = {},
        ie              = false,

        module
      ;
      
      module = {
        initialize: function() {
          module.setup();
          module.instantiate();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          module.set.ie();
        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        prevent: function(event) {
          event.preventDefault();
        },

        enableScroll: function() {
          window.removeEventListener('touchmove',      module.prevent);
          window.removeEventListener('mousewheel',     module.prevent);
          window.removeEventListener('DOMMouseScroll', module.prevent);
          window.removeEventListener('scroll',         module.event.scroll);
          window.removeEventListener('keydown',        module.event.keydown);
        },

        disableScroll: function() {
          module.set.pos();

          window.addEventListener('touchmove',      module.prevent, {passive:false});
          window.addEventListener('mousewheel',     module.prevent, {passive:false});
          window.addEventListener('DOMMouseScroll', module.prevent, {passive:false});
          window.addEventListener('scroll',         module.event.scroll);
          window.addEventListener('keydown',        module.event.keydown);
        },

        get: {
          
        },

        set: {
          ie: function() {
            var agent  = window.navigator.userAgent;
            ie = agent.indexOf("msie 9") >= 0 || agent.indexOf('rv:11.0') >= 0 || agent.indexOf("msie 10") >= 0;
          },

          touchstart: function(event) {
            var touchEvent = event.originalEvent.touches[0];
  
            startY = touchEvent.clientY;
          },
  
          touchmove: function(event) {
            var
              touchEvent   = event.originalEvent.touches[0],
              clientY      = touchEvent.clientY - startY,
              scrollTop    = element.scrollTop,
              scrollHeight = element.scrollHeight,
              clientHeight = element.clientHeight
            ;

            if(clientHeight >= scrollHeight || scrollTop === 0 && clientY > 0 || scrollHeight - scrollTop <= clientHeight && clientY < 0) {
              return false;
            }else {
              event.stopPropagation();
            }
          },

          pos: function() {
            pos = {
              x: $(window).scrollLeft(),
              y: $(window).scrollTop()
            };
          }
        },

        bind: {
          events: function() {
            $module
              .on('touchstart', module.event.touchstart)
              .on('touchmove',  module.event.touchmove)
              .on('mousewheel', module.event.mousewheel)
            ;
          }
        },

        event: {
          touchstart: function(event) {
            module.set.touchstart(event);
          },

          touchmove: function(event) {
            module.set.touchmove(event);
          },

          mousewheel: function(event) {
            if(ie) {
              var
                e = event.originalEvent,
                d = e.wheelDelta || -e.detail
              ;

              this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
              e.preventDefault();
            }
            else {
              event.stopPropagation();
            }
          },

          scroll: function() {
            $(window).scrollLeft(pos.x);
						$(window).scrollTop(pos.y);
          },

          keydown: function(event) {
            for(var i = 0; i < scrollEventKeys.length; i++) {
              if(event.keyCode === scrollEventKeys[i]) {
                event.preventDefault();
                return;
              }
            }
          }
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

RootUI.prototype.scrollLock.settings = {
  name         : 'ScrollLock',
  namespace    : 'scrollLock',

  selector     : {
    
  },
  
  className    : {
    
  },

  attr         : {
    dataGroup  : 'data-group',
    dataTarget : 'data-target',
    dataName   : 'data-name',
  }
};

/* ROOT UI circletimer는 Circle Timer 코드의 일부를 사용하여 제작되었습니다. */

/* Circle Timer https://github.com/abejfehr/circletimer

The MIT License (MIT)

Copyright (c) 2015 Abe Fehr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

RootUI.prototype.circletimer = function() {
  var
    $allModules    = $(arguments[0]),
    $window        = $(window),
    $body          = $('body'),

    query          = arguments[1],
    methodValue    = arguments[2],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function() {
      var
        settings = ($.isPlainObject(query))
          ? $.extend(true, {}, RootUI.prototype.circletimer.settings, query)
          : $.extend({}, RootUI.prototype.circletimer.settings),

        selector        = settings.selector,
        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        
        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + settings.namespace,

        $module         = $(this),
        instance        = $module.data(moduleNamespace),
        element         = this,

        timeElapsed,
        raf,

        $circle,

        module
      ;
      
      module = {
        initialize: function() {
          module.instantiate();
          module.setup();
          module.bind.events();
        },

        instantiate: function () {
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        setup: function() {
          module.create.circle();
        },

        destroy: function() {

        },

        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;

          passedArguments = passedArguments || queryArguments;
          context         = element         || context;

          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;

            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;

              if($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                object = object[camelCaseValue];
              }
              else if(object[camelCaseValue] !== undefined) {
                found = object[camelCaseValue];
                return false;
              }
              else if($.isPlainObject(object[value]) && (depth != maxDepth)) {
                object = object[value];
              }
              else if(object[value] !== undefined) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }

          if ($.isFunction(found)) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        },

        start: function() {
          var
            lastTimestamp,
            step
          ;

          if((timeElapsed == null) || timeElapsed === settings.timeout) {
            lastTimestamp = null;
            timeElapsed = 0;
          }

          if(raf != null) {
            window.cancelAnimationFrame(raf);
          }

          $circle = $(this).find('circle');

          step = function(timestamp) {
            var
              direction,
              offsetValue
            ;

            if(lastTimestamp != null) {
              timeElapsed += timestamp - lastTimestamp;
            }

            lastTimestamp = timestamp;
            direction     = settings.clockwise ? -1 : 1;
            offsetValue   = direction * 50 * Math.PI * timeElapsed / settings.timeout;

            if(offsetValue < -157) offsetValue = -157;

            module.set.circleOffset(offsetValue);

            if(timeElapsed < settings.timeout) {
              module.set.raf(step);
              settings.onUpdate.call(element, timeElapsed);
            }
            else {
              timeElapsed = settings.timeout;
              settings.onUpdate.call(element, timeElapsed);
              settings.onComplete.call(element);
            }
          }

          module.set.raf(step);
        },

        stop: function() {
          module.remove.raf();
          module.set.circleOffset(0);
          timeElapsed = 0;

          settings.onUpdate.call(element, timeElapsed);
        },

        pause: function() {
          module.remove.raf();
        },

        add: function(event, methodValue) {
          var addend = methodValue;

          if(addend < timeElapsed) {
            timeElapsed -= addend;
          }
          else {
            timeElapsed = 0;
          }
        },

        each: {
          
        },

        create: {
          circle: function() {
            var
              circle     = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
              svg        = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            ;

            circle.setAttributeNS(null, 'r', '25%');
            circle.setAttributeNS(null, 'cx', '50%');
            circle.setAttributeNS(null, 'cy', '50%');
            circle.setAttributeNS(null, 'stroke-dasharray', (50 * Math.PI) + '%');

            svg.appendChild(circle);

            $module.append(svg);
          }
        },

        is: {
          
        },

        should: {

        },

        get: {
          timeElapsed: function() {
            return timeElapsed;
          }
        },

        set: {
          raf: function(method) {
            raf = window.requestAnimationFrame(method);
          },

          circleOffset: function(value) {
            $circle.css('stroke-dashoffset', value + '%');
          }
        },

        remove: {
          raf: function() {
            window.cancelAnimationFrame(raf);
          },
        },

        bind: {
          events: function() {
            
          }
        },

        event: {
          
        }
      }
      
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;

  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

RootUI.prototype.circletimer.settings = {
  name         : 'Circletimer',
  namespace    : 'circletimer',

  metadata     : {

  },

  selector     : {
    
  },
  
  className    : {
    wrapper    : 'circle-timer-wrapper'
  },

  timeout      : 5000,
  clockwise    : true,
  onUpdate     : function() {},
  onComplete   : function() {}
};