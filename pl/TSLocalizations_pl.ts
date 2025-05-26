import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_pl {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Termin zadania **${id}** ${taskTitle} upływa ${deadline} na serwerze [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Zostałeś przydzielony do zadania **${id}** ${taskText} na serwerze [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Przydzielono zadanie ${id}`;
            },
            assigned_embed_footer: "Te powiadomienia można wyłączyć za pomocą polecenia \"/preferences direct_messages\".",
            assigned_embed_button_in_progress: "Oznacz jako w trakcie realizacji",
            assigned_embed_button_done: "Oznacz jako wykonane",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Termin zadania **${id}** ${taskTitle} minął na serwerze [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Zadanie **${id}** ${taskTitle}, do którego jesteś przydzielony, zostało powtórzone i wymaga ponownego wykonania na serwerze [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Zadanie ${id} powtórzone`;
            },
            deadline_alert: "Termin zadania",
            commented_embed_title(id: string): string {
                return `Dodano komentarz do zadania ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Dodano komentarz do zadania na serwerze [${guildName}](https://discord.com/channels/${guildId}) przez ${author}: ${commentText}`;
            },
            comment_response_button: "Odpowiedz na komentarz",
            stop_followup_reminder_button: "Zatrzymaj przypomnienie o kontynuacji",
            extend_deadline_by_one_day_button: "Przedłuż termin o 1 dzień",
            extend_deadline_by_two_days_button: "Przedłuż termin o 2 dni",
            extend_deadline_by_one_week_button: "Przedłuż termin o 1 tydzień",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Zostałeś dodany jako obserwator do zadania **${id}** ${taskText} na serwerze [${guildName}](https://discord.com/channels/${guildId}) przez <@${addedBy}>. Otrzymasz powiadomienia, gdy coś zmieni się w tym zadaniu. Jeśli chcesz przestać otrzymywać powiadomienia, kliknij poniższy przycisk.`;
            },
            watcher_added_notification_unsubscribe_button: "Wypisz się",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Zadanie **${id}** ${taskTitle}, które obserwujesz na serwerze [${guildName}](https://discord.com/channels/${guildId}), zostało zmienione:`
            },
            watcher_notification_footer: "Wyłącz powiadomienia dla tego zadania za pomocą polecenia \"/task unwatch\"",
            watcher_embed_title(id: string): string {
                return `Zadanie ${id} zaktualizowane`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Kamień milowy **${milestoneName}** upływa za mniej niż 6 godzin na serwerze [${guildName}](https://discord.com/channels/${guildId}) i zawiera zadania, które należy wykonać.`;
            },
            status_todo: "Do zrobienia",
            status_in_progress: "W trakcie realizacji",
            status_done: "Wykonane"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Termin",
            assignees_field: "Osoby przydzielone",
            status_field: "Status",
            todos_field: "Zadania do zrobienia",
            delete_at_field: "Usuń o",
            project_field: "Projekt",
            topic_field: "Temat",
            text_field: "Tekst",
            role_field: "Rola",
            permission_field: "Uprawnienie",
            user_field: "Użytkownik",
            preset_field: "Ustawienie wstępne",
            priority_field: "Priorytet",
            label_field: "Etykieta",
            personal_field: "Osobiste",
            manager_field: "Menedżer",
            repeat_interval_field: "Interwał powtarzania w dniach",
            repeat_end_date_field: "Data zakończenia powtarzania",
            milestone_field: "Kamień milowy",
            due_date_field: "Data realizacji",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Do zrobienia";
                    case 1:
                        return "W trakcie realizacji";
                    case 2:
                        return "Wykonane";
                    default:
                        return "Nieznany";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Termin zadania ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Termin zadania **${id}** upływa ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Zadanie ${id} usunięte.`;
                },
                description(id: string): string {
                    return `Zadanie ${id} zostało usunięte.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Zadanie ${id} powtórzone.`;
                },
                description(id: string): string {
                    return `Zadanie ${id} zostało powtórzone, a status został ustawiony na "do zrobienia".`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Zadanie ${id} utworzone.`;
                },
                description(task_text: string, id: string): string {
                    return `Zadanie ${id} zostało utworzone z tekstem: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Zadanie ${id} zaktualizowane.`;
                },
                description(id: string): string {
                    return `Zadanie ${id} zostało zaktualizowane i zmieniono następujące dane.`;
                }
            },
            project_created: {
                title: "Projekt utworzony",
                description(projectName: string): string {
                    return `Projekt ${projectName} został utworzony`;
                }
            },
            project_deleted: {
                title: "Projekt usunięty",
                description(projectName: string): string {
                    return `Projekt ${projectName} został usunięty`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Status zadania ${id} zmieniony`;
                }
            },
            permission_granted: {
                title: "Uprawnienie przyznane",
            },
            permission_revoked: {
                title: "Uprawnienie cofnięte",
            },
            preset_applied: {
                title: "Ustawienie wstępne zastosowane",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Termin zadania ${id} minął`;
                }
            },
            project_updated: {
                title: "Projekt zaktualizowany",
                description(name: string): string {
                    return `Projekt ${name} został zaktualizowany`;
                }
            },
            test_message: {
                title: "To jest wiadomość testowa",
                description: "Jeśli widzisz tę wiadomość, webhook działa poprawnie, a logowanie jest włączone."
            },
            comment_added: {
                title(id: string): string {
                    return `Komentarz dodany do zadania ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Komentarz usunięty z zadania ${id}`;
                }
            },
            topic_created: {
                title: "Temat utworzony",
                description(name: string): string {
                    return `Temat ${name} został utworzony`;
                }
            },
            topic_updated: {
                title: "Temat zaktualizowany",
                description(name: string): string {
                    return `Temat ${name} został zaktualizowany`;
                }
            },
            topic_deleted: {
                title: "Temat usunięty",
                description(name: string): string {
                    return `Temat ${name} został usunięty`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Dokument ${id} utworzony`;
                },
                description(name: string): string {
                    return `Dokument ${name} został utworzony`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Dokument ${id} zaktualizowany`;
                },
                description(name: string): string {
                    return `Dokument ${name} został zaktualizowany`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Dokument ${id} usunięty`;
                },
                description(name: string): string {
                    return `Dokument ${name} został usunięty`;
                }
            },
            label_created: {
                title: "Etykieta utworzona",
                description(name: string): string {
                    return `Etykieta ${name} została utworzona`;
                }
            },
            label_updated: {
                title: "Etykieta zaktualizowana",
                description(name: string): string {
                    return `Etykieta ${name} została zaktualizowana`;
                }
            },
            label_deleted: {
                title: "Etykieta usunięta",
                description(name: string): string {
                    return `Etykieta ${name} została usunięta`;
                }
            },
            attachments_field: "Załączniki",
            milestone_created: {
                title: "Kamień milowy utworzony",
            },
            milestone_updated: {
                title: "Kamień milowy zaktualizowany",
            },
            milestone_deleted: {
                title: "Kamień milowy usunięty",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `Nadchodzące wydarzenie (${id}) **${name}** rozpoczyna się za ${durationTillEventMinutes} minut o ${startTime} na [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Zostałeś zaproszony na wydarzenie ${eventId} przez <@${inviterId}>: **${eventName}** rozpoczynające się o ${start} i kończące o ${end}.\n-# Wszystkie daty są obliczane w strefie czasowej ${timezone}. Użyj polecenia \"/settings timezone\", aby zmienić strefę czasową dla całego serwera lub \"/preferences timezone\", aby zmienić swoją własną.`;
                },
                accept_button: "Akceptuj",
                deny_button: "Odrzuć"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> zaktualizował wydarzenie ${eventId}: **${eventName}** rozpoczynające się o ${start} i kończące o ${end}.\n-# Wszystkie daty są obliczane w strefie czasowej ${timezone}. Użyj polecenia \"/settings timezone\", aby zmienić strefę czasową dla całego serwera lub \"/preferences timezone\", aby zmienić swoją własną.`
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Gratulacje! Zostałeś umieszczony na miejscu pro na serwerze [${guildName}](<https://discord.com/channels/${guildId}>). Oznacza to, że masz teraz dostęp do [funkcji pro](<https://bnder.net/pricing>). Miłego korzystania!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `Płatność za jedno lub więcej miejsc pro na serwerze [${guildName}](https://discord.com/channels/${guildId}) nie powiodła się. Proszę [kliknąć tutaj](${customerPortalLink}), aby zapłacić fakturę. W przeciwnym razie utracisz dostęp do funkcji pro. W razie pytań skontaktuj się z pomocą techniczną.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `Plik **${fileName}** został z tobą udostępniony na serwerze [${guildName}](https://discord.com/channels/${guildId}) przez <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Folder **${folderName}** został z tobą udostępniony na serwerze [${guildName}](https://discord.com/channels/${guildId}) przez <@${userId}>`;
            }
        },
        self_data_download_ready: "Twoje dane są gotowe do pobrania. Możesz je pobrać w [naszej aplikacji](<https://bnder.net/app/>). Link do pobrania jest dostępny przez dwa tygodnie."
    }
}