import { TSLocalizations_de } from "./de/TSLocalizations_de";
import { TSLocalizations_bg } from "./bg/TSLocalizations_bg";
import { TSLocalizations_en } from "./en/TSLocalizations_en";
import { TSLocalizations_es_es } from "./es-es/TSLocalizations_es-es";
import { TSLocalizations_fr } from "./fr/TSLocalizations_fr";
import { TSLocalizations_pt_br } from "./pt-br/TSLocalizations_pt-br";
import { TSLocalizations_ru } from "./ru/TSLocalizations_ru";
import { TSLocalizations_tr } from "./tr/TSLocalizations_tr";
import { TSLocalizations_hi } from "./hi/TSLocalizations_en";

export interface TSLocalizationKeys {
    task: {
        deadline_due(id: string, deadline: string, task_text: string, guildName: string): string;
        assigned_notification(guildName: string): string;
        assigned_embed_title(id: string): string;
        assigned_embed_footer: string;
        assigned_embed_button_in_progress: string;
        assigned_embed_button_done: string;
        deadline_was_in_past(id: string, task_text: string, guildName: string): string;
        repeat_notification(guildName: string): string;
        repeat_notification_embed_title(id: string): string;
    },
    webhookLogging: {
        id_field: string,
        deadline_field: string,
        assignees_field: string,
        status_field: string,
        status_field_value(status: number): string,
        delete_at_field: string,
        text_field: string,
        project_field: string,
        permission_field: string,
        role_field: string,
        user_field: string,
        preset_field: string,
        priority_field: string,
        label_field: string,
        personal_field: string,
        manager_field: string,
        repeat_interval_field: string,
        repeat_end_date_field: string,
        deadline_due: {
            title(id: string): string,
            description(id: string, deadline: string): string,
        },
        task_deleted: {
            title(id: string): string,
            description(id: string): string,
        },
        repeat_set: {
            title(id: string): string,
            description(id: string): string,
        },
        task_created: {
            title(id: string): string,
            description(id: string, task_text: string): string,
        },
        task_updated: {
            title(id: string): string,
            description(id: string): string,
        },
        project_created: {
            title: string,
            description(projectName: string): string,
        },
        project_deleted: {
            title: string,
            description(projectName: string): string,
        },
        task_status_changed: {
            title(id: string): string,
        },
        permission_granted: {
            title: string,
        }
        permission_revoked: {
            title: string,
        },
        preset_applied: {
            title: string,
        },
        deadline_was_in_past: {
            title(id: string): string,
        },
        project_updated: {
            title: string,
            description(name: string): string,
        },
        test_message: {
            title: string,
            description: string,
        },
    },
    event: {
        reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, startTime: string): string;
        invite_notification: {
            content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string,
            accept_button: string,
            deny_button: string,
        }
    }
}

export class Localizations {

    static Localizations: {
        [key: string]: TSLocalizationKeys
    } = {
        "bg": TSLocalizations_bg.Localizations,
        "de": TSLocalizations_de.Localizations,
        "en": TSLocalizations_en.Localizations,
        "es-es": TSLocalizations_es_es.Localizations,
        "fr": TSLocalizations_fr.Localizations,
        "hi": TSLocalizations_hi.Localizations,
        "pt-br": TSLocalizations_pt_br.Localizations,
        "ru": TSLocalizations_ru.Localizations,
        "tr": TSLocalizations_tr.Localizations,
    }
}
