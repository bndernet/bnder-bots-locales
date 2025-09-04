import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_bg {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Крайният срок за задачата **${id}** ${taskTitle} е дължим на ${deadline} в сървъра [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Възложена ви е задача **${id}** ${taskText} в сървъра [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Задача ${id} назначена`;
            },
            assigned_embed_footer: "Тези известия могат да бъдат деактивирани от администратор на сървъра с командата \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Отбележи като в процес",
            assigned_embed_button_done: "Отбележи като завършена",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `Краен срок за задача ${id} е изтекъл в сървър [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Задачата **${id}** ${taskTitle} която ви е възложена, е била повторена и трябва да бъде изпълнена отново в сървъра [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Задача ${id} повторена`;
            },
            deadline_alert: "Краен срок на задача",
            commented_embed_title(id: string): string {
                return `Добавен коментар към задача ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Коментар беше добавен към задача в сървър [${guildName}](<https://discord.com/channels/${guildId}>) от ${author}: ${commentText}`;
            },
            comment_response_button: "Отговори на коментар",
            stop_followup_reminder_button: "Спри напомнянето за последване",
            extend_deadline_by_one_day_button: "Удължаване на срока с 1 ден",
            extend_deadline_by_two_days_button: "Удължаване на срока с 2 дни",
            extend_deadline_by_one_week_button: "Удължаване на срока с 1 седмица",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Добавени сте като наблюдател към задача **${id}** ${taskText} на сървър [${guildName}](<https://discord.com/channels/${guildId}>) от <@${addedBy}>. Ще получавате известия, когато нещо се промени в тази задача. Ако искате да спрете да получавате известия, можете да кликнете върху бутона по-долу.`;
            },
            watcher_added_notification_unsubscribe_button: "Отписване",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Задачата **${id}** ${taskTitle} която наблюдавате в сървъра [${guildName}](<https://discord.com/channels/${guildId}>), е променена:`;
            },
            watcher_notification_footer: "Деактивиране на известията за тази задача с помощта на командата „/task unwatch“",
            watcher_embed_title(id: string): string {
                return `Задачата ${id} е актуализирана`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Важен етап **${milestoneName}** предстои след по-малко от 6 часа в сървъра [${guildName}](<https://discord.com/channels/${guildId}>) и има задачи, които трябва да бъдат изпълнени.`;
            },
            status_todo: "Задача",
            status_in_progress: "В процес",
            status_done: "Завършена"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Краен срок",
            assignees_field: "Назначени",
            status_field: "Статус",
            todos_field: "до дос",
            delete_at_field: "Изтриване на",
            project_field: "Проект",
            topic_field: "Тема",
            text_field: "Текст",
            user_field: "Потребител",
            role_field: "Роля",
            permission_field: "Право",
            preset_field: "Предварителна настройка",
            priority_field: "Приоритет",
            label_field: "Етикет",
            personal_field: "Лично",
            manager_field: "Мениджър",
            repeat_interval_field: "Интервал на повторение в дни",
            repeat_end_date_field: "Край на повторението",
            milestone_field: "Краен срок",
            due_date_field: "Краен срок",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "In Progress";
                    case 2:
                        return "Done";
                    default:
                        return "Unknown";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Краен срок на задача ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Краен срок за задача **${id}** е на ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Задача ${id} изтрита.`;
                },
                description(id: string): string {
                    return `Задача ${id} беше изтрита от кошчето.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Задача ${id} повторена.`;
                },
                description(id: string): string {
                    return `Задача ${id} беше повторена и статусът беше зададен на todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Задача ${id} създадена.`;
                },
                description(task_text: string, id: string): string {
                    return `Задача ${id} беше създадена с текст: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Задача ${id} актуализирана.`;
                },
                description(id: string): string {
                    return `Задача ${id} беше актуализирана и бяха променени следните данни.`;
                }
            },
            project_created: {
                title: "Проект създаден",
                description(projectName: string): string {
                    return `Проект ${projectName} беше създаден`;
                }
            },
            project_deleted: {
                title: "Проект изтрит",
                description(projectName: string): string {
                    return `Проект ${projectName} беше изтрит`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Статус на задача ${id} променен`;
                }
            },
            permission_granted: {
                title: "Право предоставено",
            },
            permission_revoked: {
                title: "Право отнето",
            },
            preset_applied: {
                title: "Приложена предварителна настройка",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Краен срок за задача ${id} е изтекъл`;
                }
            },
            project_updated: {
                title: "Проект актуализиран",
                description(name: string): string {
                    return `Проект ${name} беше актуализиран`;
                }
            },
            test_message: {
                title: "Това е тестово съобщение",
                description: "Ако виждате това съобщение, уебхукът работи правилно и логването е активирано."
            },
            comment_added: {
                title(id: string): string {
                    return `Коментар към задача ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Коментар към задача ${id} изтрит`;
                }
            },
            topic_created: {
                title: "Тема създадена",
                description(topicName: string): string {
                    return `Тема ${topicName} беше създадена`;
                }
            },
            topic_updated: {
                title: "Тема актуализирана",
                description(topicName: string): string {
                    return `Тема ${topicName} беше актуализирана`;
                }
            },
            topic_deleted: {
                title: "Тема изтрита",
                description(topicName: string): string {
                    return `Тема ${topicName} беше изтрита`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Документ ${id} създаден`;
                },
                description(name: string): string {
                    return `Документ ${name} беше създаден`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Документ ${id} актуализиран`;
                },
                description(name: string): string {
                    return `Документ ${name} беше актуализиран`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Документ ${id} изтрит`;
                },
                description(name: string): string {
                    return `Документ ${name} беше изтрит`;
                }
            },
            label_created: {
                title: "Етикет създаден",
                description(name: string): string {
                    return `Етикет ${name} беше създаден`;
                }
            },
            label_updated: {
                title: "Етикет актуализиран",
                description(name: string): string {
                    return `Етикет ${name} беше актуализиран`;
                }
            },
            label_deleted: {
                title: "Етикет изтрит",
                description(name: string): string {
                    return `Етикет ${name} беше изтрит`;
                }
            },
            attachments_field: "Прикачени файлове",
            milestone_created: {
                title: "Краен срок създаден",
            },
            milestone_updated: {
                title: "Краен срок актуализиран",
            },
            milestone_deleted: {
                title: "Краен срок изтрит",
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Предстоящото събитие (${id}) **${name}** започва след ${durationTillEventMinutes} минути в ${startTime} в [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Поканени сте на събитие ${eventId} от <@${inviterId}>: **${eventName}**, започващо в ${start} и завършващо в ${end}.\n-# Всички дати са изчислени в ${timezone}. Използвайте \"/settings timezone\", за да промените часовата зона за целия сървър, или \"/preferences timezone\", за да промените своя собствена.`;
                },
                accept_button: "Приеми",
                deny_button: "Откажи"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> актуализира събитието ${eventId}: **${eventName}**, започващо в ${start} и завършващо в ${end}.\n-# Всички дати се изчисляват в ${timezone}. Използвайте \"/settings timezone\", за да промените часовата зона за целия сървър, или \"/preferences timezone\", за да промените своя собствена.`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `честито! Бяхте поставен на професионално място в сървър [${guildName}](<https://discord.com/channels/${guildId}>). Това означава, че вече имате достъп до [професионални функции](<https://bnder.net/pricing>). Насладете се!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Необходимо действие: Плащането за Pro абонамент не бе успешно\nНе успяхме да обработим плащането за едно или повече Pro места на [${guildName}](<https://discord.com/channels/${guildId}>). За да избегнете загуба на достъп до Pro функциите, моля, [актуализирайте информацията си за плащане и платете фактурата си сега](<${customerPortalLink}>).\n\nВашите Pro функции скоро ще бъдат деактивирани, ако не бъдат предприети действия.\n\nНуждаете се от помощ? [Свържете се с поддръжката](https://bnder.net/discord) — ние сме тук за вас.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Файлът **${fileName}** беше споделен в сървъра [${guildName}](<https://discord.com/channels/${guildId}>) от <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Папката **${folderName}** беше споделена в сървъра [${guildName}](<https://discord.com/channels/${guildId}>) от <@${userId}>`;
            }
        },
        self_data_download_ready: "Вашите данни са готови за изтегляне. Можете да го изтеглите в [нашето приложение](<https://bnder.net/app/>). Връзката за изтегляне е достъпна за две седмици.",
        tutorial_tasks: {
            tutorial_label_name: "Урок",
            create_first_task_title: "Създайте първата си задача",
            create_first_task_description: "Започнете, като създадете задача. Дайте й име и по желание описание.",
            change_task_status_title: "Променете статуса на задачата",
            change_task_status_description: "Променете статуса на задача на „В процес“ или „Завършена“, като я плъзнете в съответната колона.",
            invite_team_members_title: "Поканете членовете на екипа си",
            invite_team_members_description: "Поканете членовете на вашия екип да се присъединят към вашето работно пространство. Те ще видят поканата в настройките на потребителя си.",
            explore_workspace_title: "Разгледайте работното пространство",
            explore_workspace_description: "Разгледайте работното пространство и се запознайте с функциите. Можете да създавате задачи, управлявате членове и други. Можете също така да разгледате настройките, за да промените формата на датата, езика и часовата зона."
        },
        mails: {
            footer: {
                company_limited_liability: "с ограничена отговорност",
                company_address: "Im Flath 12 - 38542 Leiferde - Германия",
                company_register_court: "Окръжен съд Хилдесхайм - HRB 209373",
                company_ceo: "Управител: Ян Бринкман",
                company_contact: "Имейл: contact@bnder.net - Телефон: +49 511 45032009",
                legal_automated_email: "Този имейл е изпратен автоматично. Моля, не отговаряй на него.",
                legal_privacy_policy_prefix: "Нашата политика за поверителност е достъпна на",
                legal_imprint: "Импресум",
                legal_terms_of_use: "Условия за ползване",
                legal_privacy_policy: "Политика за поверителност",
            },
            verify_email: {
                headline: "Моля, потвърди своя имейл адрес",
                text: "Моля, потвърди своя имейл адрес, като кликнеш върху връзката по-долу.",
                primaryActionText: "Потвърди имейл адрес",
            },
            password_changed: {
                headline: "Паролата е променена",
                text: "Паролата ви беше успешно променена. Ако не сте инициирали тази промяна, моля свържете се незабавно с поддръжката на contact@bnder.net.",
            },
            reset_password: {
                headline: "Нулиране на парола",
                text: "За да нулирате паролата си, моля кликнете върху бутона по-долу. Ако не сте заявили нулиране на паролата, игнорирайте този имейл.",
                primaryActionText: "Нулирай паролата",
            },
            workspace_invitation: {
                headline: "Покана за работно пространство",
                text(workspaceName: string): string {
                    return `Бяхте поканени в работното пространство ${workspaceName}. Кликнете върху бутона по-долу, за да приемете поканата и да се присъедините.`;
                },
                primaryActionText: "Присъедини се към работното пространство",
            },
            task_assigned: {
                subject: "Възложена ви е нова задача",
                greeting(guildName: string): string {
                    return `Назначена ви е задача в работното пространство ${guildName}.`;
                },
                no_deadline: "Няма определен краен срок за тази задача.",
                open_in_app: "Отвори в приложението",
            },
            primaryPasteActionLinkText: "Или поставете връзката по-долу в своя браузър:",
            task_watcher: {
                added_subject: "Бяхте добавен като наблюдател към задача",
                watcher_added(guildName: string): string {
                    return `Бяхте добавен като наблюдател към задача в работното пространство ${guildName}. Ще получавате известия, когато има промени по тази задача.`;
                },
                subject: "Известие за промяна по задача",
                activity(guildName: string): string {
                    return `Задача, която наблюдавате в работното пространство ${guildName}, беше променена.`;
                }
            },
            self_data_download_ready: {
                headline: "Вашите данни са готови за изтегляне",
                text: "Подготвили сме вашите данни за изтегляне. Можете да ги достъпите в приложението. Линкът за изтегляне ще бъде наличен за две седмици.",
            },
            open_app: "Отвори приложението",
        }
    }
}