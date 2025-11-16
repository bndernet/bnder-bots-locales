import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_ru {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Срок выполнения задания **${id}** ${taskTitle} должен наступить в ${deadline} на сервере [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Вы были назначены на задание **${id}** ${taskText} на сервере [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            assigned_embed_title(id: string): string {
                return `Задача ${id} назначена`;
            },
            assigned_embed_footer: "Эти уведомления могут быть отключены администратором сервера с помощью команды \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "В процессе",
            assigned_embed_button_done: "Сделано",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `Крайний срок для задачи ${id} истек в сервере [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Задание **${id}** ${taskTitle} , на которое вы назначены, было повторено и должно быть выполнено снова на сервере [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Задача ${id} повторена`;
            },
            deadline_alert: "Крайний срок задачи",
            commented_embed_title(id: string): string {
                return `К задаче ${id} добавлен комментарий`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `К задаче на сервере [${guildName}](<https://discord.com/channels/${guildId}>) был добавлен комментарий от ${author}: ${commentText}`;
            },
            comment_response_button: "Ответить на комментарий",
            stop_followup_reminder_button: "Остановить напоминание о выполнении",
            extend_deadline_by_one_day_button: "Продлить срок на 1 день",
            extend_deadline_by_two_days_button: "Продлить срок на 2 дня",
            extend_deadline_by_one_week_button: "Продлить срок на 1 неделю",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Вы были добавлены в качестве наблюдателя к задаче **${id}** ${taskText} на сервере [${guildName}](<https://discord.com/channels/${guildId}>) пользователем <@${addedBy}>. Вы будете получать уведомления, когда что-то изменится в этой задаче. Если вы хотите прекратить получать уведомления, вы можете нажать кнопку ниже.`;
            },
            watcher_added_notification_unsubscribe_button: "Отписаться",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Задание **${id}** ${taskTitle} за которым вы следите на сервере [${guildName}](<https://discord.com/channels/${guildId}>), изменилось:`;
            },
            watcher_notification_footer: "Отключите уведомления для этой задачи с помощью команды «/task unwatch».",
            watcher_embed_title(id: string): string {
                return `Задача ${id} обновлена`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Достижение этапа **${milestoneName}** на сервере [${guildName}](<https://discord.com/channels/${guildId}>) запланировано менее чем на 6 часов, и в нем есть задания, которые необходимо выполнить.`;
            },
            status_todo: "Todo",
            status_in_progress: "В процессе",
            status_done: "Сделано",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Крайний срок",
            assignees_field: "Назначенные",
            status_field: "Статус",
            todos_field: "В дос",
            delete_at_field: "Удалить в",
            project_field: "Проект",
            topic_field: "Тема",
            text_field: "Текст",
            role_field: "Роль",
            user_field: "Пользователь",
            permission_field: "Право",
            preset_field: "Предустановка",
            priority_field: "Приоритет",
            label_field: "Метка",
            manager_field: "Менеджер",
            repeat_interval_field: "Интервал повторения в днях",
            repeat_end_date_field: "Дата окончания повторения",
            milestone_field: "Веха",
            due_date_field: "Срок выполнения",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "В процессе";
                    case 2:
                        return "Сделано";
                    default:
                        return "Неизвестно";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Крайний срок для задачи ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Крайний срок для задачи **${id}** истекает ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Задача ${id} удалена.`;
                },
                description(id: string): string {
                    return `Задача ${id} была удалена из корзины.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Задача ${id} повторяется.`;
                },
                description(id: string): string {
                    return `Задача ${id} была повторена, а статус был установлен на todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Задача ${id} создана.`;
                },
                description(task_text: string, id: string): string {
                    return `Задача ${id} была создана с текстом: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Задача ${id} обновлена.`;
                },
                description(id: string): string {
                    return `Задача ${id} была обновлена, и были изменены следующие данные.`;
                }
            },
            project_created: {
                title: "Проект создан",
                description(projectName: string): string {
                    return `Проект ${projectName} был создан`;
                }
            },
            project_deleted: {
                title: "Проект удален",
                description(projectName: string): string {
                    return `Проект ${projectName} был удален`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Статус задачи ${id} изменен`;
                }
            },
            permission_revoked: {
                title: "Право отозвано",
            },
            permission_granted: {
                title: "Право предоставлено",
            },
            preset_applied: {
                title: "Предустановка применена",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Крайний срок для задачи ${id} просрочен`;
                }
            },
            project_updated: {
                title: "Проект обновлен",
                description(name: string): string {
                    return `Проект ${name} был обновлен`;
                }
            },
            test_message: {
                title: "Это тестовое сообщение",
                description: "Если вы видите это сообщение, веб-крючок работает правильно, и включено ведение журнала."
            },
            comment_added: {
                title(id: string): string {
                    return `Комментарий добавлен к задаче ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Комментарий удален из задачи ${id}`;
                }
            },
            topic_created: {
                title: "Тема создана",
                description(name: string): string {
                    return `Тема ${name} была создана`;
                }
            },
            topic_updated: {
                title: "Тема обновлена",
                description(name: string): string {
                    return `Тема ${name} была обновлена`;
                }
            },
            topic_deleted: {
                title: "Тема удалена",
                description(name: string): string {
                    return `Тема ${name} была удалена`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Документ ${id} создан`;
                },
                description(name: string): string {
                    return `Документ ${name} был создан`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Документ ${id} обновлен`;
                },
                description(name: string): string {
                    return `Документ ${name} был обновлен`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Документ ${id} удален`;
                },
                description(name: string): string {
                    return `Документ ${name} был удален`;
                }
            },
            label_created: {
                title: "Метка создана",
                description(name: string): string {
                    return `Метка ${name} была создана`;
                }
            },
            label_updated: {
                title: "Метка обновлена",
                description(name: string): string {
                    return `Метка ${name} была обновлена`;
                }
            },
            label_deleted: {
                title: "Метка удалена",
                description(name: string): string {
                    return `Метка ${name} была удалена`;
                }
            },
            attachments_field: "Вложения",
            milestone_created: {
                title: "Веха создана",
            },
            milestone_updated: {
                title: "Веха обновлена",
            },
            milestone_deleted: {
                title: "Веха удалена",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Предстоящее событие (${id}) **${name}** начнется через ${durationTillEventMinutes} минут в ${startTime} в [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Вы приглашены на мероприятие ${eventId} пользователем <@${inviterId}>: **${eventName}**, начинающееся в ${start} и заканчивающееся в ${end}.\n-# Все даты рассчитываются в ${timezone}. Используйте \"/settings timezone\", чтобы изменить часовой пояс для всего сервера, или \"/preferences timezone\", чтобы изменить свой собственный.`;
                },
                accept_button: "Принять",
                deny_button: "Отклонить"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> обновил событие ${eventId}: **${eventName}**, начинающееся в ${start} и заканчивающееся в ${end}.\n-# Все даты рассчитываются в ${timezone}. Используйте \"/settings timezone\", чтобы изменить часовой пояс для всего сервера, или \"/preferences timezone\", чтобы изменить свой собственный.`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Поздравляем! Вы получили место pro на сервере [${guildName}](<https://discord.com/channels/${guildId}>). Это значит, что теперь у вас есть доступ к [pro-функциям](<https://bnder.net/pricing>). Наслаждайтесь!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Необходимо действие: платеж за подписку Pro не прошел\nНам не удалось обработать платеж за одно или несколько мест Pro на [${guildName}](<https://discord.com/channels/${guildId}>). Чтобы не потерять доступ к функциям Pro, пожалуйста, [обновите платежную информацию и оплатите счет сейчас](<${customerPortalLink}>).\n\nВаши функции Pro будут отключены в ближайшее время, если не предпринять никаких действий.\n\nНужна помощь? [Свяжитесь со службой поддержки](https://bnder.net/discord) — мы здесь для вас.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Файл **${fileName}** был загружен на сервер [${guildName}](<https://discord.com/channels/${guildId}>) пользователем <@${userId}>.`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Папка **${folderName}** была загружена на сервер [${guildName}](<https://discord.com/channels/${guildId}>) пользователем <@${userId}>.`;
            }
        },
        self_data_download_ready: "Ваши данные готовы к загрузке. Вы можете загрузить их в [нашем приложении](<https://bnder.net/app/>). Ссылка на загрузку доступна в течение двух недель.",
        tutorial_tasks: {
            tutorial_label_name: "Учебник",
            create_first_task_title: "Создайте вашу первую задачу",
            create_first_task_description: "Начните с создания задачи. Дайте ей название и при необходимости описание.",
            change_task_status_title: "Измените статус задачи",
            change_task_status_description: "Измените статус задачи на «В процессе» или «Выполнено», перетащив её в соответствующий столбец.",
            invite_team_members_title: "Пригласите членов вашей команды",
            invite_team_members_description: "Пригласите членов вашей команды присоединиться к вашему рабочему пространству. Они увидят приглашение в настройках пользователя.",
            explore_workspace_title: "Исследуйте рабочее пространство",
            explore_workspace_description: "Изучите рабочее пространство и познакомьтесь с функциями. Вы можете создавать задачи, управлять участниками и многое другое. Также можно заглянуть в настройки, чтобы изменить формат даты, язык и часовой пояс."
        },
        mails: {
            footer: {
                company_limited_liability: "с ограниченной ответственностью",
                company_address: "Im Flath 12 - 38542 Leiferde - Германия",
                company_register_court: "Amtsgericht Hildesheim - HRB 209373",
                company_ceo: "Генеральный директор: Ян Бринкманн",
                company_contact: "Эл. почта: contact@bnder.net - Телефон: +49 511 45032009",
                legal_automated_email: "Это письмо было отправлено автоматически. Пожалуйста, не отвечайте на него.",
                legal_privacy_policy_prefix: "Наша политика конфиденциальности доступна по адресу",
                legal_imprint: "Выходные данные",
                legal_terms_of_use: "Условия использования",
                legal_privacy_policy: "Политика конфиденциальности",
            },
            verify_email: {
                headline: "Пожалуйста, подтвердите ваш адрес электронной почты",
                text: "Подтвердите ваш адрес электронной почты, кликнув по ссылке ниже.",
                primaryActionText: "Подтвердить e-mail",
            },
            password_changed: {
                headline: "Пароль изменён",
                text: "Ваш пароль был успешно изменён. Если вы не делали это изменение, пожалуйста, немедленно свяжитесь со службой поддержки по адресу contact@bnder.net.",
            },
            reset_password: {
                headline: "Сбросить пароль",
                text: "Чтобы сбросить пароль, нажмите кнопку ниже. Если вы не запрашивали сброс пароля, проигнорируйте это письмо.",
                primaryActionText: "Сбросить пароль",
            },
            workspace_invitation: {
                headline: "Приглашение в рабочее пространство",
                text(workspaceName: string): string {
                    return `Вас пригласили в рабочее пространство ${workspaceName}. Нажмите кнопку ниже, чтобы принять приглашение и присоединиться к рабочему пространству.`;
                },
                primaryActionText: "Присоединиться к рабочему пространству",
            },
            task_assigned: {
                subject: "Вам назначена новая задача",
                greeting(guildName: string): string {
                    return `Вам назначена задача в рабочей области ${guildName}.`;
                },
                no_deadline: "Крайний срок для этой задачи не установлен.",
                open_in_app: "Открыть в приложении",
            },
            primaryPasteActionLinkText: "Или вставьте ссылку ниже в ваш браузер:",
            task_watcher: {
                added_subject: "Вы были добавлены в наблюдатели задачи",
                watcher_added(guildName: string): string {
                    return `Вы были добавлены в наблюдатели задачи в рабочем пространстве ${guildName}. Вы будете получать уведомления при изменениях в этой задаче.`;
                },
                subject: "Уведомление об обновлении задачи",
                activity(guildName: string): string {
                    return `Задача, которую вы наблюдаете в рабочем пространстве ${guildName}, была изменена.`;
                }
            },
            self_data_download_ready: {
                headline: "Ваши данные готовы для загрузки",
                text: "Мы подготовили ваши данные для загрузки. Вы можете получить к ним доступ в приложении. Ссылка для загрузки доступна в течение двух недель.",
            },
            payment_failed: {
                headline: "🚨 Требуется действие: Платёж за подписку Pro не прошёл",
                text(guildName: string): string {
                    return `Мы не смогли обработать платёж за одно или несколько Pro-мест в ${guildName}. Чтобы не потерять доступ к функциям Pro, обновите платёжную информацию и оплатите счёт сейчас. Ваши функции Pro скоро будут отключены, если не предпринять действий. Нужна помощь? Свяжитесь с поддержкой — мы рядом.`;
                },
                primaryActionText: "Обновить платёжную информацию"
            },
            open_app: "Открыть приложение",
        }
    }
}